//Variables
var buttonStart = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz-area");
var quizLaunch = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var quizComplete = document.getElementById("quiz-complete");
var questionEl = document.getElementById("question-title");
var buttonChoices = document.getElementById("answer-buttons");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var answerDisplay = document.getElementById("answers-display");
var endQuizScreen = document.getElementById("quiz-end-title");
var submitScore = document.getElementById("submit-initials");
var highScoresDisplay = document.getElementById("highscores");
var leaderBoardInitials = document.getElementById("initials-div");
var leaderBoardScore = document.getElementById("score-div");

var returnToQuiz = document.getElementById("return-quiz");
var highScoresLink = document.getElementById("score-leaderboard");
var clear = document.getElementById("clear-btn");
var timerEl = document.getElementById("time-spent");
var startTime ;

var highScores = [];
var scoreNames = [];

// Timer - starts at 75 sec and countdown to 0
function timerCountdown() {
  startTime = 2
  var timerInterval = setInterval(function () {
    startTime--;
    timerEl.textContent = startTime + " seconds remaining";

    if ((startTime === 0) | (qIndex === questions.length)) {
      clearInterval(timerInterval);
      sendMessage();
      return;
    }
  }, 1000);
}
//changes timer to read time is up, alerts user
function sendMessage() {
  timerEl.textContent = "Time is up!";
  if (startTime <= 0) {
  alert("Time is Up!");
  showQuestion();
  }
}
//starts quiz
function launchQuiz() {
  quizLaunch.classList.add("hide");
  questionContainer.classList.remove("hide");
  showQuestion();
}
//cycle through questions, if reaches end display score
var qIndex = 0;

function showQuestion() {
  if ((qIndex === questions.length) | (startTime === 0)) {
    endQuizScreen.classList.remove("hide");
    questionContainer.classList.add("hide");
    document.getElementById("correct-incorrect").classList.add("hide");
    var score = startTime;
    alert("Quiz over! Your score is " + score);
    highScores.push(score);
  } else {
    questionEl.innerText = questions[qIndex].title;
    btn1.innerHTML = questions[qIndex].choices[0];
    btn2.innerHTML = questions[qIndex].choices[1];
    btn3.innerHTML = questions[qIndex].choices[2];
    btn4.innerHTML = questions[qIndex].choices[3];
  }
}

function selectAnswer() {
  if (event.target.textContent === questions[qIndex].answer) {
    document.getElementById("correct-incorrect").innerHTML = "CORRECT!";
  } else {
    document.getElementById("correct-incorrect").innerHTML = "WRONG!";
    startTime = startTime - 10;
  }
}
//start quiz
buttonStart.addEventListener("click", function () {
  timerCountdown();
  launchQuiz();
});
//go to next question
buttonChoices.addEventListener("click", function () {
  selectAnswer();
  qIndex++;
  showQuestion();
});

//high scores
submitScore.addEventListener("click", function () {
  alert("Your score has been submitted");
  var scoreInitials = document.getElementById("enter-initials").value;

  var playerScore = {
    initials: [scoreInitials],
    score: [highScores],
  };

  console.log(playerScore);

  function populateStorage() {
    localStorage.setItem("playerScore", JSON.stringify(playerScore));
    localStorage.setItem("initials", JSON.stringify(scoreInitials));
  }
  populateStorage(playerScore);
});

//click high scores, hide question container toggle return to quiz
highScoresLink.addEventListener("click", function () {
  highScoresDisplay.classList.toggle("hide");
  quizLaunch.classList.add("hide");
  endQuizScreen.classList.add("hide");
  highScoresLink.classList.toggle("hide");
  returnToQuiz.classList.toggle("hide");

  var scoreList = JSON.parse(localStorage.getItem("playerScore"));

  document.getElementById("initials-div").textContent = scoreList.initials;
  document.getElementById("score-div").textContent = scoreList.score;
});
  //clear scores button
clear.addEventListener("click", clearScores);
function clearScores() {
  localStorage.clear();
  document.getElementById("initials-div").textContent = "";
  document.getElementById("score-div").textContent = "";
}
//return to quiz
returnToQuiz.addEventListener("click", function () {
  highScoresLink.classList.toggle("hide");
  returnToQuiz.classList.toggle("hide");
  quizLaunch.classList.toggle("hide");
  highScoresDisplay.classList.toggle("hide");
});

