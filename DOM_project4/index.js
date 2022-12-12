// Varibles for buttons
const startsstopbtn = document.querySelector("startsstopbtn");
const resetbtn = document.querySelector("resetbtn");

//varibles for timer

let seconds = 0;
let minutes = 0;
let hours = 0;
//varible leading o
let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

//stop watch fuction

function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (seconds / 60 === 1) {
      seconds = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }

  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }

  if (hours < 10) {
    leadinghours = "0" + hours.toString();
  } else {
    leadinghours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadinghours + " : " + leadingminutes + " : " + leadingseconds);
  console.log(displayTimer);
}
window.setInterval(stopwatch, 1000);
