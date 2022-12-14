var startbutton = document.querySelector(".start-button");
startbutton.addEventListener("click", function () {
  document.querySelector(".quiz-intro").style.display = "none";
  document.querySelector(".Quiz-area").style.display = "block";
  showquestion();
  quiztimer();
});
// questions to the quiz
var questionbank = [
  {
    question: "Commonly used data types do not include",
    chocies: ["strings", "boolean", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with",
    chocies: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store",
    chocies: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

var questionindex = 0;
function showquestion() {
  document.querySelector(".Question").innerText =
    questionbank[questionindex].question;
  document.querySelector(".button1").innerText =
    questionbank[questionindex].chocies[0];
  document.querySelector(".button2").innerText =
    questionbank[questionindex].chocies[1];
  document.querySelector(".button3").innerText =
    questionbank[questionindex].chocies[2];
  document.querySelector(".button4").innerText =
    questionbank[questionindex].chocies[3];
}

// adds timer to the quiz
var timer;
let time = 75;
function quiztimer() {
  timer = setInterval(function () {
    if (time > 0) {
      time -= 1;
      document.querySelector(".time").innerText = time;
    }
  }, 1000);
}
function togglestatus(status) {
  var statussection = document.getElementById("status-container");
  if (!status) {
    statussection.style.display = "none";
    return;
  }
  statussection.style.display = "block";
  var text = document.getElementById("answer-status");
  text.innerText = status;
}
var disabled = false;
function answerquestion(event) {
  if (disabled) return;
  disabled = true;
  var choice = event.target.innerText;
  var correct = questionbank[questionindex].answer;
  if (choice === correct) {
    togglestatus("correct");
  } else {
    togglestatus("incorrect");
    time = time - 10;
  }
  setTimeout(() => {
    disabled = false;
    togglestatus();
    questionindex += 1;
    if (questionindex === questionbank.length) {
      var questionsection = document.getElementById("Quiz-area");
      toggledonesection(true);
    } else {
      showquestion();
    }
  }, 2000);
}
function toggledonesection(show) {
  var donesection = document.getElementById("done");
  donesection.style.display = show ? "block" : "none";
  var score = document.getElementById("score");
  score.innerText = time;
  clearInterval(timer);
  document.getElementById("Quiz-area").innerHTML = "";
}

showquestion();
document.querySelector(".button1").addEventListener("click", answerquestion);
document.querySelector(".button2").addEventListener("click", answerquestion);
document.querySelector(".button3").addEventListener("click", answerquestion);
document.querySelector(".button4").addEventListener("click", answerquestion);
document.querySelector(".button5").addEventListener("click", getinitials);

// document.getElementById("initials").value = localStorage.getItem("initials");
// document.getElementById("score").value = localStorage.getItem("score");
function getinitials() {
  let textarea8 = document.getElementById("initials").value;
  let points = document.getElementById("score").value;
  localStorage.setItem("initials", textarea8);
  localStorage.setItem("score", points);
  document.getElementById("done").innerHTML = "";
  alert(textarea8, points);
}

const initials1 = localStorage.getItem("initials");
document.getElementById("initials1").innerHTML = initials1;


