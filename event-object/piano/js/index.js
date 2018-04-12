"use strict";

const middle = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3"
];

const higher = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3"
];

const lower = [
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3",
  "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3"
];

const keyboard = document.getElementsByClassName("set")[0];
const keys = Array.from(keyboard.getElementsByTagName("li"));

keys.forEach((key, i) => {
  key.addEventListener("click", function() {
    let note = this.getElementsByTagName("audio")[0];
    note.src = middle[i];
    
    if (keyboard.classList.contains("higher")) {
      note.src = higher[i];
    } else if (keyboard.classList.contains("lower")) {
      note.src = lower[i];
    } else note.src = middle[i];
    
    note.play();
  });
});

function pianoRegisterChange(event) {
  if (event.key === "Alt") {
    keyboard.classList.remove("middle");
    keyboard.classList.add("higher");
  }

  if (event.key === "Shift") {
    keyboard.classList.remove("middle");
    keyboard.classList.add("lower");
  }
}

function pianoRegisterDefault(event) {
  keyboard.classList.remove("higher");
  keyboard.classList.remove("lower");
  keyboard.classList.add("middle");
}

document.addEventListener("keydown", pianoRegisterChange);
document.addEventListener("keyup", pianoRegisterDefault);
