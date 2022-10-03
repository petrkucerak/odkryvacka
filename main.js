let anchors = undefined;

function prebarvi() {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].style.opacity = "1.0";
  }
}

function odhal() {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].style.opacity = "0.0";
  }
}

let pozice = 1;

function next() {
  const old = document.getElementById("obrazek");

  const img = document.createElement("img"); 
  img.onerror = (e) => {
    switch (img.src.split(".").at(-1)) {
      case 'jpg':
        img.src = img.src.replace(".jpg", ".jpeg");
        break;
      case 'jpeg':
        img.src = img.src.replace(".jpeg", ".png");
        break;
      case 'png':
        alert("Hra je u konce!");
        break;
    }
  }; 

  delete img.width;
  delete img.height;
  img.id = "obrazek";
  img.style.display = 'none';
  img.onload = () => {
    refresh(img);
    if (stav) {
      stav = false;
      setTimeout(
       "stav = true;odhaluj();",
       parseInt(document.getElementById("sekund").value) * 1000 + 100
      );
    } 
  };
  img.src = `img/${pozice++}.jpg`;

  old.replaceWith(img);
  return img;
}

class Tym {
  constructor(jmeno, i) {
    this.name = jmeno;
    this.body = 0;
    this.id = i;

    this.pricti = function () {
      this.body++;
      document.getElementById(this.name).innerHTML = this.body;
    };

    this.odecti = function () {
      this.body--;
      document.getElementById(this.name).innerHTML = this.body;
    };

    this.vypis = function () {
      document.getElementById("tymy").innerHTML +=
        "<span class='jmeno'>" +
        this.name +
        " : <span id='" +
        this.name +
        "'>" +
        this.body +
        "</span></span><br> <button class ='pricitani' onClick= 'hrajici[" +
        this.id +
        "].pricti();'>+</button> <button  class ='pricitani' onClick = 'hrajici[" +
        this.id +
        " ].odecti();'>-</button><br><br>";
    };
  }
}

const hrajici = [];

window.onload = () => {
  next();
  const pocet = parseInt(prompt("Kolik chcete tymu?"));

  for (i = 0; i < pocet; i++) {
    var cislo = i + 1;
    var jmeno = prompt("Jake je jmeno tymu " + cislo + "?");
    hrajici[i] = new Tym(jmeno, i);
    hrajici[i].vypis();
  }
};

let cellMap;

function refresh(img) {

  const image = img || document.getElementById("obrazek");

  const tabulka = document.getElementById("tabulka");

  tabulka.querySelectorAll("td").forEach(function (data) {
    data.parentNode.remove();
  });

  let newWidth = window.innerWidth - 400;
  let newHeight = (image.height / image.width) * newWidth;
  if (newHeight > window.innerHeight - 200) {
    image.width = (image.width / image.height) * (window.innerHeight - 200);
    image.height = window.innerHeight - 200;
  } else {
    image.width = newWidth;
    image.height = newHeight;
  }


  let w = image.width;
  let h = image.height;
  //find best fit like an idiot, not tested tho
  const initFit = Math.round(Math.max(w, h) / 10); //optimal
  let dy = Infinity, dx = Infinity, bestFit = initFit; 
  for (let i = Math.round(initFit*1.2); i > Math.round(initFit*0.8); i--) {
    let ddy = h % i;
    let ddx = w % i;
    if ((ddy < dy && ddx > dx) || (ddy < dy && Math.abs(dy - ddy) <= Math.abs(dx - ddx)) || (ddx < dx && Math.abs(dy - ddy) >= Math.abs(dx - ddx))) {
      dx = ddx, dy = ddy, bestFit = i;
      if (dx === 0 && dy === 0) {
        break;
      }
    }
  }

  image.style.marginLeft = `${bestFit+30}px`; //table has 30px margin

  image.style.marginTop = `${bestFit}px`;

  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "CH",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  const widthSegments =  Math.ceil((w*0.98) / bestFit);
  const heightSegments = Math.ceil((h*0.98) / bestFit);

  const tr = document.createElement("tr");
  { //left top corner
    const td = document.createElement("td");
    td.style.width = `${bestFit}px`;
    td.style.height = `${bestFit}px`;
    tr.appendChild(td);
  }

  for (let column = 0; column < widthSegments; column++) {    
    const td = document.createElement("td");
    td.style.width = `${bestFit}px`;
    td.style.height = `${bestFit}px`;
    td.innerText = letters[column];
    tr.appendChild(td);
  }

  tabulka.appendChild(tr);

  for (let row = 0; row < heightSegments; row++) {

    const tr = document.createElement("tr");

    {
      const td = document.createElement("td");
      td.style.width = `${bestFit}px`;
      td.style.height = `${bestFit}px`;
      td.innerText = `${row+1}`;
      tr.appendChild(td);
    }

   for (let column = 0; column <widthSegments; column++) {
        
      const td = document.createElement("td");
      var focus = function (a, b, color) {
        return () => {
          const col = document
            .getElementById("tabulka")
            .getElementsByTagName("tr")[0]
            .getElementsByTagName("td")[b+1];
          col.style.background = color;
          var row = document
            .getElementById("tabulka")
            .getElementsByTagName("tr")[a+1].getElementsByTagName("td")[0];
          row.style.background = color;
        };
      };
      var click = function() {
        this.style.opacity = '0';
      };
      td.onmouseover = focus(row, column, "#dcdcdc");
      td.onmouseout = focus(row, column, "white");
      td.onmousedown = click;
      td.onclick = click;

      td.style.width = `${bestFit}px`;
      td.style.height = `${bestFit}px`;
      td.id = `${letters[column]}_${row}`;
      tr.appendChild(td);
    } 
    tabulka.appendChild(tr);
  }
  
  anchors = [...document.getElementsByTagName("td")].filter(x => x.id);
  cellMap = {};

  for (var i = 0; i < anchors.length; i++) {
    const anchor = anchors[i], id = anchor.id;
      cellMap[id] = true;
      anchor.onclick = function () {
        delete cellMap[id];
      };
    }
    image.style.display = 'initial';
  
}

var stav = false;
var klik = 1;

function zmena() {
  klik += 1 / 2;
  if (klik % 2 == 0) {
    stav = true;
    odhaluj();
  } else {
    stav = false;
  }
}

function odhaluj() {
  if (stav) {
    const bunky = Object.keys(cellMap);

    if (bunky.length > 0) {
      var delka = bunky.length;
      var nahoda = Math.floor(Math.random() * delka);
      document.getElementById(bunky[nahoda]).style.opacity = "0.0";
      setTimeout(
        "odhaluj()",
        parseInt(document.getElementById("sekund").value) * 1000
      );
    } else {
      odhal();
    }
  }
}
