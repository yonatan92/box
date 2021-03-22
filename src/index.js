//-------------------------------
//         Move the box
//-------------------------------
//
/*
instructions:
  Write a script that will animate the box
  move it 200 pixels to the right over the course of 2 seconds.

Restrictions:
  Don't use any external libraries
  Don't change the html or CSS
  Vanilla JS only :)
*/

const box = document.querySelector(".box");
const time = `2000ms`;
const distToMove = `200px`;

let boxStyle = window.getComputedStyle(box);
if (boxStyle.transition) {
  box.style.transition = `transform ${time}`;
}

box.style.transform = `translateX(${distToMove})`;
