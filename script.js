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
var highscoresDisplay = document.getElementById("highscores");
var leaderboardInitials = document.getElementById("initials-div");
var leaderboardScore = document.getElementById("score-div");

var returnToQuiz = document.getElementById("return-quiz");
var highscoresLink = document.getElementById("score-leaderboard");
var timerEl = document.getElementById("time-spent");
var startTime = 75;

var highscores = [];
var scoreNames = [];

// Timer - starts at 75 sec and countdown to 0
function timerCountdown() {
    var timerInterval = setInterval(function() {
        startTime--;
        timerEl.textContent = startTime + " seconds remaining";

        if(startTime === 0 | qIndex === questions.length) {
            clearInterval(timerInterval);
            sendMessage();
            return;
        }
    }, 1000);
}
//changes timer to read time is up
function sendMessage() {
    timerEl.textContent = "Time is up!";
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
    if (qIndex === questions.length | startTime === 0) {
        endQuizScreen.classList.remove("hide");
        questionContainer.classList.add("hide");
        var score = startTime;
        alert("Your score is " + score);
        highscores.push(score);
        
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
        alert("That's correct!");
    }  else {
        alert("That's incorrect!");
        startTime = startTime - 10;
    } 

}

buttonStart.addEventListener("click", function() {
    timerCountdown();
    launchQuiz();
});

buttonChoices.addEventListener("click", function() {
    selectAnswer();
    qIndex++;
    showQuestion();

});

submitScore.addEventListener("click", function() {
    alert("Your initials have been submitted!");
    var scoreInitials = document.getElementById("enter-initials").value;

    var playerScore = {
        initials: [scoreInitials],
        score: [highscores]
    }

    console.log(playerScore);

    function populateStorage () {
        localStorage.setItem("player score", JSON.stringify(playerScore));
        localStorage.setItem("initials", JSON.stringify(scoreInitials));
    }
    populateStorage(playerScore);
    
})

//click high scores, hide question container
highscoresLink.addEventListener("click", function() {

    highscoresDisplay.classList.toggle("hide");
    quizLaunch.classList.add("hide");
    endQuizScreen.classList.add("hide");
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");

    var scoreList = JSON.parse(localStorage.getItem("playerScore"));
    
    leaderboardInitials.append.textContent = scoreList.initials;
    leaderboardScore.append.textContent = scoreList.highscore;

})

returnToQuiz.addEventListener("click", function () {
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");
    quizLaunch.classList.toggle("hide");
    highscoresDisplay.classList.toggle("hide");
})