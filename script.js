//Start quiz when START clicked
document
  .getElementById("startButton")
  .addEventListener("click", function () {
    
  });

//Countdown timer begins when START clicked
document.getElementById("startButton").addEventListener("click", function () {
  var timeleft = 60;

  var timer = setInterval(function function1() {
    document.getElementById("timer").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Time is up!";
    }
  }, 1000);
});
