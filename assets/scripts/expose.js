// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornID = document.getElementById("horn-select");
  const image = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  setVolume(audio)
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
function setVolume(audio) {
  var slider = document.getElementById("volume");
  var volumeIcon = document.querySelector("#volume-controls img");
  slider.addEventListener("input", function() {
    if (slider.value == 0) {
      let path = "assets/icons/volume-level-0.svg";
      volumeIcon.src = path;
    }
    else if (slider.value < 33) {
      let path = "assets/icons/volume-level-1.svg";
      volumeIcon.src = path;
    }
    else if (slider.value < 67) {
      let path = "assets/icons/volume-level-2.svg";
      volumeIcon.src = path;
    }
    else {
      let path = "assets/icons/volume-level-3.svg";
      volumeIcon.src = path;
    }
    audio.volume = slider.value / 100;
  });
}