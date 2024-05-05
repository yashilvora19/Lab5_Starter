// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let text = document.getElementById("text-to-speak");
  const image = document.querySelector('img[alt="Smiling face"]');
  populateVoiceList(false);
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}

function populateVoiceList(speak) {
  if (typeof speechSynthesis === "undefined") {
    return;
  }
  const voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
  // SPEAKING PART
  let voice = document.getElementById("voice-select");
  let text = document.getElementById("text-to-speak");
  let i = 0;
  
  voice.addEventListener("change", function() {
    // Get the index of the selected option
    i = this.selectedIndex;
  });
  var smilingFace = document.querySelector("#explore img");
  const synth = window.speechSynthesis;
  // SPEAKING PART
  var button = document.querySelector("button"); 
  if (speak) { 
    button.addEventListener("click", function() {
      let speaking = new SpeechSynthesisUtterance();
      speaking.text = text.value;
      speaking.voice = voices[i-1];

      //image update
      speaking.onstart = () => {
        smilingFace.src = "assets/images/smiling-open.png";
      };
      speaking.onend = () => {
        smilingFace.src = "assets/images/smiling.png";
      };

      synth.speak(speaking);
    });
  }
}

// function speak(text, myvoices, index) {
//   const synth = window.speechSynthesis;
//   var button = document.querySelector("button");  
//   button.addEventListener("click", function() {
//     let speaking = new SpeechSynthesisUtterance();
//     speaking.text = text.value;
//     speaking.voice = myvoices[index];
//     synth.speak(speaking);
//   });
// }