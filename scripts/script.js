// JavaScript Document
console.log("Howdy!");

var playButton = document.getElementsByClassName('play');
var myVideo = document.getElementsByClassName('video');

// Selecteert de 'play button' en voegt een event listener toe die de video
// met de classname "video" afspeelt wanneer erop wordt geklikt (if). Als er
// niet op wordt geklikt, wordt de video gepauzeerd (else).
playButton.addEventListener('click', function() {
  if (myVideo.paused) {
    myVideo.play();
    // playButton.textContent = "Pause Video";
  } else {
    myVideo.pause();
    // playButton.textContent = "Play Video";
  }
});

// Selecteert de 'video' en voegt een event listener toe die de video
// afspeelt wanneer erop wordt geklikt (if). Als er niet op wordt geklikt,
// blijft de video gepauzeerd (else).
myVideo.addEventListener('click', function() {
  if (myVideo.paused) {
    myVideo.play();
    // playButton.textContent = "Pause Video";
  } else {
    myVideo.pause();
    // playButton.textContent = "Play Video";
  }
});