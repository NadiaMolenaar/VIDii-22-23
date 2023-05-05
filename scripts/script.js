// JavaScript Document
console.log("Howdy!");

/////////////
// BUTTONS //
/////////////
var button1985 = document.querySelector("section:nth-of-type(3) button:nth-of-type(1)");
button1985.addEventListener("click", showInfo1);
button1985.addEventListener("click", play1985);

var button1989 = document.querySelector("section:nth-of-type(3) button:nth-of-type(2)");
button1989.addEventListener("click", showInfo2);
button1989.addEventListener("click", play1989);

var button1993 = document.querySelector("section:nth-of-type(3) button:nth-of-type(3)");
button1993.addEventListener("click", showInfo3);
button1993.addEventListener("click", play1993);

var button1996 = document.querySelector("section:nth-of-type(3) button:nth-of-type(4)");
button1996.addEventListener("click", showInfo4);
button1996.addEventListener("click", play1996);

var button2002 = document.querySelector("section:nth-of-type(3) button:nth-of-type(5)");
button2002.addEventListener("click", showInfo5);
button2002.addEventListener("click", play2002);

var button2006 = document.querySelector("section:nth-of-type(3) button:nth-of-type(6)");
button2006.addEventListener("click", showInfo6);
button2006.addEventListener("click", play2006);

var button2009 = document.querySelector("section:nth-of-type(3) button:nth-of-type(7)");
button2009.addEventListener("click", showInfo7);
button2009.addEventListener("click", play2009);

var button2011 = document.querySelector("section:nth-of-type(3) button:nth-of-type(8)");
button2011.addEventListener("click", showInfo8);
button2011.addEventListener("click", play2011);



/////////////////
// P ELEMENTEN //
/////////////////

var titelInfo = document.querySelector("li:nth-of-type(1) p:nth-of-type(1)");
var broodtekstInfo = document.querySelector("li:nth-of-type(1) p:nth-of-type(2)");



/////////////////////
// VIDEO ELEMENTEN //
/////////////////////

var videoInfo1 = document.getElementById("video1985");
var videoInfo2 = document.getElementById("video1989");
var videoInfo3 = document.getElementById("video1993");
var videoInfo4 = document.getElementById("video1996");
var videoInfo5 = document.getElementById("video2002");
var videoInfo6 = document.getElementById("video2006");
var videoInfo7 = document.getElementById("video2009");
var videoInfo8 = document.getElementById("video2011");



/////////////////////
// SHOW INFORMATIE //
//////////////////////////////

function showInfo1() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[0];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[0];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo1.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo2() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[1];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[1];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo2.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo3() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[2];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[2];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo3.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo4() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[3];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[3];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo4.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo5() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[4];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[4];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo5.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo6() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[5];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[5];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo6.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo7() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[6];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[6];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo7.classList.toggle("show");
  console.log("Howdy!");
};

function showInfo8() {
  document.querySelector("li:nth-of-type(1) p:nth-of-type(1)").innerHTML=titel[7];
  document.querySelector("li:nth-of-type(1) p:nth-of-type(2)").innerHTML=paragraaf[7];

  titelInfo.classList.toggle("show");
  broodtekstInfo.classList.toggle("show");
  videoInfo8.classList.toggle("show");
  console.log("Howdy!");
};



////////////////
// INFORMATIE //
////////////////

// Constante waarden, deze veranderen niet
const titel = [
  "1985", 
  "1989",
  "1993",
  "1996",
  "2002"
];

const paragraaf = [
  "Super Mario Bros. is verdeeld in acht werelden, die elk vier levels bevatten. Mario (of, in het geval van een tweede speler, zijn broer Luigi) moet naar het einde van het level zien te komen door over verschillende gaten te springen en de vijanden op zijn weg te ontwijken. Hij kan gebruik maken van verschillende platforms (waarvan sommige instorten als Mario erop landt), trappen in het level en springplanken. Er zijn ook pijpen langs de weg, waarvan Mario sommige kan betreden om verschillende geheime muntenkamers te bezoeken voordat hij terugkeert naar het level, een stukje verder dan toen hij vertrok.",
  "Aan het einde van de meeste levels van het spel vecht de speler tegen Birdo. De speler moet op de eieren springen die hij spuugt, ze pakken en teruggooien, en Birdo drie keer raken om een kristal te winnen waarmee de Maskerpoort aan het einde van het level wordt geopend. Er zijn verschillende kleuren Birdos: roze, die alleen eieren spuwt; rood, dat eieren en vuurballen spuwt en groen, dat alleen vuurballen spuwt. Voor de groene Birdos zijn er Paddestoelblokken in de buurt die de speler kan gebruiken.",
  "Aan het begin van elke race verschijnt Lakitu en geeft een aftelsignaal. De positie van de racers is afhankelijk van hun eerdere posities, maar bij de start van een Grand Prix beginnen de spelers eerst op de achtste plaats. Als spelers hun versnelling timen wanneer het signaal van rood naar blauw verandert, kunnen ze sneller starten of zelfs een Rocket Start uitvoeren, maar als spelers te vroeg drukken, spinnen ze uit en starten ze langzamer dan gemiddeld. Telkens wanneer een speler de lijn passeert om aan zijn tweede ronde te beginnen, geeft Lakitu de speler een seintje door een groen bord voor de tweede ronde te laten verschijnen. Als een speler de lijn passeert om aan zijn derde ronde te beginnen, klinkt er een jingle, verschijnt Lakitu met een blauw bord voor de laatste ronde en versnelt de achtergrondmuziek. ",
  "De spelers racen of vechten tegen hun tegenstanders, afhankelijk van de gekozen spelstand. Een integraal onderdeel van de gameplay is het item-systeem, waarbij spelers items kunnen oppikken van Question Blocks die op delen van het circuit staan. Het verkregen voorwerp is afhankelijk van de positie van de speler in de race. Zo krijgen spelers die verder achter liggen sterkere voorwerpen, zoals de onoverwinnelijke, snelheidsverhogende Ster of de Bliksem die alle racers kan laten krimpen, terwijl spelers die verder voor liggen de basisartikelen Bananenschillen en Groene Schelpen krijgen. De Question Blocks raken leeg als een speler eroverheen rijdt, en de items worden pas opnieuw uitgegeven als alle Question Blocks op de baan leeg zijn. ",
  "Ze maken een ruwe landing op Delfino Airstrip, omdat een grote hoeveelheid vreemde, bewegende brij in de vorm van Mario's hoofd de landingsbaan blokkeert en een kuil heeft gevormd. Mario gaat even op zoek naar iets om hem te helpen en vindt al snel een unieke waterpomp, uitgevonden door professor E. Gadd, genaamd FLUDD, de Flash Liquidizer Ultra Dousing Device. Na instructie voor de gebruiker gebruikt Mario de FLUDD om de poep op te ruimen en een Gatekeeper te verslaan, waarna de landingsbaan weer in zijn normale staat terugkeert en er een Shine Sprite verschijnt, die Mario verzamelt."
];


//////////////////////////
// VERBERGEN INFORMATIE //
//////////////////////////

// function toggleTitelInfo() {
//   titel.classList.add("hide");
// }

// function toggleBroodtekstInfo() {
//   paragraph.classList.add("hide");
// };

function toggleVideoInfo() {
  titel.classList.add("hide"),
  paragraph.classList.add("hide"),
  video.classList.add("hide");
}



////////////////////
// AFSPELEN VIDEO //
////////////////////

function play1985() {
  if (video1985.paused) {
    video1985.play();
  } else {
    video1985.pause();
  }
}

function play1989() {
  if (video1989.paused) {
    video1989.play();
  } else {
    video1989.pause();
  }
}

function play1993() {
  if (video1993.paused) {
    video1993.play();
  } else {
    video1993.pause();
  }
}

function play1996() {
  if (video1996.paused) {
    video1996.play();
  } else {
    video1996.pause();
  }
}

function play2002() {
  if (video2002.paused) {
    video2002.play();
  } else {
    video2002.pause();
  }
}

function play2006() {
  if (video2006.paused) {
    video2006.play();
  } else {
    video2006.pause();
  }
}

function play2009() {
  if (video2009.paused) {
    video2009.play();
  } else {
    video2009.pause();
  }
}

function play2011() {
  if (video2011.paused) {
    video2011.play();
  } else {
    video2011.pause();
  }
}
