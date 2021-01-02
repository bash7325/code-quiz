//variables
var timeID = document.getElementById("timer");
var start = document.getElementById("startButton");
var btn1 = document.getElementById("choiceA");
var btn2 = document.getElementById("choiceB");
var btn3 = document.getElementById("choiceC");
var question = document.getElementById("question");
var answers = document.getElementById("answers");

//array for questions with choices and correct answer
var questions = [

  {

      question : "?",

      choiceA : "A",

      choiceB : "B",

      choiceC : "C",

      correct : "A"

  },{

      question : "?",

      choiceA : "A",

      choiceB : "B",

      choiceC : "C",

      correct : "B"

  },{

      question : "?",

      choiceA : "A",

      choiceB : "B",

      choiceC : "C",

      correct : "C"

  }

];
//Countdown timer begins when START clicked
document.getElementById("startButton").addEventListener("click", function () {
  var timeleft = 60;

  var timer = setInterval(function function1() {
    document.getElementById("timer").innerHTML =
      timeleft + " " + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Time is up!";
    }
  }, 1000);
});
