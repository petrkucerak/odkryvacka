const anchors = document.getElementsByTagName("td");

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

let pozice = 2;

function next() {
  document["obr"].src = `img/${pozice++}.jpg`;
  obnovaBunek();
  if (stav) {
    stav = false;
    setTimeout(
      "stav = true;odhaluj();",
      parseInt(document.getElementById("sekund").value) * 1000 + 100
    );
  }
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

  obrazek.onerror = () => {
    switch (obrazek.src.split(".").at(-1)) {
      case 'jpg':
        obrazek.src = obrazek.src.replace(".jpg", ".jpeg");
        break;
      case 'jpeg':
        obrazek.src = obrazek.src.replace(".jpeg", ".png");
        break;
      case 'png':
        alert("Hra je u konce!");
        break;
    }
  };

  const tabulka = document.getElementById("tabulka");
  const trs = tabulka.getElementsByTagName("tr");
  for (let a = 0; a < trs.length; a++) {
    const tr = trs[a];
    if (a > 0) {
      const tds = tr.getElementsByTagName("td");
      for (var b = 0; b < tds.length; b++) {
        var td = tds[b];
        if (b > 0) {
          var f = function (a, b, color) {
            return () => {
              const col = document
                .getElementById("tabulka")
                .getElementsByTagName("tr")[0]
                .getElementsByTagName("td")[b];
              col.style.background = color;
              var row = document
                .getElementById("tabulka")
                .getElementsByTagName("tr")[a].getElementsByTagName("td")[0];
              row.style.background = color;
            };
          };
          td.onmouseover = f(a, b, "#dcdcdc");
          td.onmouseout = f(a, b, "white");
        }
      }
    }
  }

  for (var i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.onclick = function () {
      this.style.opacity = "0.0";
      var iden = this.id;
      for (i = 0; i < bunky.length; i++) {
        if (bunky[i] == iden) {
          bunky.splice(i, 1);
        }
      }
    };
  }

  const pocet = parseInt(prompt("Kolik chcete tymu?"));

  for (i = 0; i < pocet; i++) {
    var cislo = i + 1;
    var jmeno = prompt("Jake je jmeno tymu " + cislo + "?");
    hrajici[i] = new Tym(jmeno, i);
    hrajici[i].vypis();
  }
};

var stav = false;
var klik = 1;
var bunky = [
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
  "AA",
  "BB",
  "CC",
  "DD",
  "EE",
  "GG",
  "FF",
  "HH",
  "CHCH",
  "II",
  "JJ",
  "KK",
  "LL",
  "MM",
  "NN",
  "OO",
  "PP",
  "QQ",
  "RR",
  "SS",
  "TT",
  "UU",
  "VV",
  "WW",
  "XX",
  "YY",
  "ZZ",
  "AAA",
  "BBB",
  "CCC",
  "DDD",
  "EEE",
  "FFF",
  "GGG",
  "HHH",
  "CHCHCH",
  "III",
  "JJJ",
  "KKK",
  "LLL",
  "MMM",
  "NNN",
  "OOO",
  "PPP",
  "QQQ",
  "RRR",
  "SSS",
  "TTT",
  "UUU",
  "VVV",
  "WWW",
  "XXX",
  "YYY",
  "ZZZ",
  "AAAA",
  "BBBB",
  "CCCC",
  "DDDD",
  "EEEE",
  "FFFF",
  "GGGG",
];

function obnovaBunek() {
  bunky = [
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
    "AA",
    "BB",
    "CC",
    "DD",
    "EE",
    "GG",
    "FF",
    "HH",
    "CHCH",
    "II",
    "JJ",
    "KK",
    "LL",
    "MM",
    "NN",
    "OO",
    "PP",
    "QQ",
    "RR",
    "SS",
    "TT",
    "UU",
    "VV",
    "WW",
    "XX",
    "YY",
    "ZZ",
    "AAA",
    "BBB",
    "CCC",
    "DDD",
    "EEE",
    "FFF",
    "GGG",
    "HHH",
    "CHCHCH",
    "III",
    "JJJ",
    "KKK",
    "LLL",
    "MMM",
    "NNN",
    "OOO",
    "PPP",
    "QQQ",
    "RRR",
    "SSS",
    "TTT",
    "UUU",
    "VVV",
    "WWW",
    "XXX",
    "YYY",
    "ZZZ",
    "AAAA",
    "BBBB",
    "CCCC",
    "DDDD",
    "EEEE",
    "FFFF",
    "GGGG",
  ];
}

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
    if (bunky.length > 0) {
      var delka = bunky.length;
      var nahoda = Math.floor(Math.random() * delka);
      document.getElementById(bunky[nahoda]).style.opacity = "0.0";
      bunky.splice(nahoda, 1);
      setTimeout(
        "odhaluj()",
        parseInt(document.getElementById("sekund").value) * 1000
      );
    } else {
      odhal();
      obnovaBunek();
    }
  }
}
