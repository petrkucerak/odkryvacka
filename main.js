const anchors = document.getElementsByTagName("td");

function prebarvi() {
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.opacity = "1.0";
  }
}

function odhal() {
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].style.opacity = "0.0";
  }
}

var obrazky = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "41.jpg",
  "42.jpg",
  "43.jpg",
  "44.jpg",
  "45.jpg",
  "46.jpg",
  "47.jpg",
  "48.jpg",
  "49.jpg",
  "50.jpg",
  "51.jpg",
  "52.jpg",
  "53.jpg",
  "54.jpg",
  "55.jpg",
  "56.jpg",
  "57.jpg",
  "58.jpg",
  "59.jpg",
  "60.jpg",
  "61.jpg",
  "62.jpg",
  "63.jpg",
  "64.jpg",
  "65.jpg",
  "66.jpg",
  "67.jpg",
  "68.jpg",
  "69.jpg",
  "70.jpg",
  "71.jpg",
  "72.jpg",
  "73.jpg",
  "74.jpg",
  "75.jpg",
  "76.jpg",
  "77.jpg",
  "78.jpg",
  "79.jpg",
];
let pozice = 0;

function next() {
  pozice++;
  document["obr"].src = "img/" + obrazky[pozice];
  obnovaBunek();
  if (stav) {
    stav = false;
    setTimeout(
      "stav = true;odhaluj();",
      parseInt(document.getElementById("sekund").value) * 1000 + 100
    );
  }
}

function Tym(jmeno, i) {
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
      "<span class = jmeno>" +
      this.name +
      " : <span id=" +
      this.name +
      ">" +
      this.body +
      "</span></span><br> <button class ='pricitani' onClick= 'hrajici[" +
      this.id +
      "].pricti();'>+</button> <button  class ='pricitani' onClick = 'hrajici[" +
      this.id +
      " ].odecti();'>-</button><br><br>";
  };
}

const hrajici = [];

window.onload = () => {
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
