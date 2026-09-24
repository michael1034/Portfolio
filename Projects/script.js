let yesCount = 0;

const noMessages = [
  "I think you meant Yes 👀",
  "Nice try 😏",
  "That button's shy, try the other one",
  "No isn't an option today",
  "Yes is right there though...",
  "Cmon Do better ya know :(",
  "I know you did not mean to touch that or press that :D",
  "Hey Please????",
  "I like you why wont you? :(",
  "you dont need to do that ToT",
  "Better Press the other one it might be good :D"
];

function sayYes() {
  yesCount++;
  const questionText = document.getElementById("question-text");

  if (yesCount === 1) {
    questionText.innerText = "Really?? You mean it? 🥹";
  } else if (yesCount === 2) {
    questionText.innerText = "You are not joking are you?";
  }
   else if (yesCount === 3) {
    questionText.innerText = "That means alot aweeee";
   }
   else if (yesCount === 4) {
    questionText.innerText = "Wanna go out?";
   }
   else if (yesCount === 5) {
    questionText.innerText = "well then  its settled!!";
   }
}

function moveButton() {
  const btn = document.getElementById("no-btn");
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  btn.style.position = "fixed";
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";

  // Show a random "no" response each time it dodges
  const questionText = document.getElementById("question-text");
  const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
  questionText.innerText = randomMessage;
}

// Mobile support: dodge on touch, before the tap completes
const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveButton();
});