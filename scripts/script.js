// JavaScript Document
console.log("Howdy!");

// var jaar1985 = document.querySelector("section:nth-child(3) button:nth-of-type(1)");
// jaar1985.addEventListener("click", showInfo1);

// var paragraph = document.querySelector("li:nth-of-type(1) p");

// function showInfo1() {
//   document.querySelector("p").innerHTML=titel[0];
//   document.querySelector("p").innerHTML=backgroundInfo[0];

//   paragraph.classList,toggle("show");
//   console.log("test");
// };

// const titel = [
//   "SUPER MARIO BROS",
//   "SUPER MARIO BROS 2",
//   "SUPER MARIO KART"
// ];

// const backgroundInfo = [
//   "Super Mario Bros is verdeeld in acht werelden, die elk vier levels bevatten. Mario (of, in het geval van een tweede speler, zijn broer Luigi) moet naar het einde van het level zien te komen door over verschillende gaten te springen en de vijanden op zijn weg te ontwijken. Hij kan gebruik maken van verschillende platforms (waarvan sommige instorten als Mario erop landt), trappen in het level en springplanken. Er zijn ook pijpen langs de weg, waarvan Mario sommige kan betreden om verschillende geheime muntenkamers te bezoeken voordat hij terugkeert naar het level, een stukje verder dan toen hij vertrok.",
//   "Aan het begin van elk level kan de speler kiezen tussen de speelbare personages: Mario, Luigi, Toad en Prinses Toadstool. Alle vier de personages hebben verschillende krachten en statistieken. Wanneer de speler het volgende level ingaat of een leven verliest, kan hij een ander personage kiezen. Aan het einde van de meeste levels van het spel vecht de speler tegen Birdo. De speler moet op de eieren springen die hij spuugt, ze pakken en teruggooien, en Birdo drie keer raken om een kristal te winnen waarmee de Maskerpoort aan het einde van het level wordt geopend. Er zijn verschillende kleuren Birdos: roze, die alleen eieren spuwt; rood, dat eieren en vuurballen spuwt en groen, dat alleen vuurballen spuwt. Voor de groene Birdos zijn er Paddestoelblokken in de buurt die de speler kan gebruiken."
// ];

// function toggleParagraph() {
//   paragraph.classList.add("hide");
// };


var button1985 = document.querySelector("section:nth-of-type(3) button:nth-of-type(1)");

var video1985 = document.getElementById("1985");

button1985.addEventListener("click", play1985);

function play1985() {
  if (video1985.paused) {
    video1985.play();
    // playButton.textContent = "Pause Video";
  } else {
    video1985.pause();
    // playButton.textContent = "Play Video";
  }
}

var button1989 = document.querySelector("section:nth-of-type(3) button:nth-of-type(2)");

var video1989 = document.getElementById("1989");

button1989.addEventListener("click", play1989);

function play1989() {
  if (video1989.paused) {
    video1989.play();
    // playButton.textContent = "Pause Video";
  } else {
    video1989.pause();
    // playButton.textContent = "Play Video";
  }
}

var button1993 = document.querySelector("section:nth-of-type(3) button:nth-of-type(3)");

var video1993 = document.getElementById("1993");

button1993.addEventListener("click", play1993);

function play1993() {
  if (video1993.paused) {
    video1993.play();
    // playButton.textContent = "Pause Video";
  } else {
    video1993.pause();
    // playButton.textContent = "Play Video";
  }
}