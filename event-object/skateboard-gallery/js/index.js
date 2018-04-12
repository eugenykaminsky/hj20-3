"use strict";

let images = [
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/01.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/02.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/03.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/04.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/05.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/06.jpg",
  "https://netology-code.github.io/hj-homeworks/event-object/skateboard-gallery/images/full/07.jpg"
];

let thumbnailsSelector = document.getElementById("nav");
let thumbnails = thumbnailsSelector.getElementsByTagName("a");
let bigImage = document.getElementById("view");
let thumbnailsArray = Array.from(thumbnails);

thumbnailsArray.forEach((thumbnail, i) => {
  thumbnail.addEventListener("click", function(event) {
    event.preventDefault();
   
    thumbnailsArray.forEach(item => {
      item.classList.remove("gallery-current");
    });
    
    this.classList.add("gallery-current");
    bigImage.src = images[i];
  });
});
