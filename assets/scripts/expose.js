// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornID = document.getElementById("horn-select");
  const image = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  hornSetup(hornID, image, audio);
  playSound(audio);
}

function hornSetup(hornID, image, audio) {
  hornID.addEventListener("change", function() {
    const horn = hornID.value;
    image.src = "assets/images/"+horn+".svg";
    audio.src = "assets/audio/"+horn+".mp3";
  })
}

function playSound(audio) {
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    audio.load();
    audio.play();
  })
}