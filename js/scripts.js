$(document).ready(function() {
  // function kiki(){
  //   $(".paragraph").show();
  //   $("#hide").hide();
  // }
  $('button#hide').click(function() {
    $(".paragraph").show();
    $("button#hide").hide();
  });
});


function check() {

  var question1 = document.test.question1.value;
  var question2 = document.test.question2.value;
  var question3 = document.test.question3.value;
  var question4 = document.test.question4.value;
  var question5 = document.test.question5.value;
  var question6 = document.test.question6.value;
  var question7 = document.test.question7.value;
  var question8 = document.test.question8.value;
  var question9 = document.test.question9.value;
  var question10 = document.test.question10.value;
  var correct = 0;

  if (question1 == "A") {
    correct++;
  }
  if (question2 == "A") {
    correct++;
  }
  if (question3 == "A") {
    correct++;
  }
  if (question4 == "C") {
    correct++;
  }
  if (question5 == "B") {
    correct++;
  }
  if (question6 == "B") {
    correct++;
  }
  if (question7 == "C") {
    correct++;
  }
  if (question8 == "C") {
    correct++;
  }
  if (question9 == "B") {
    correct++;
  }
  if (question10 == "C") {
    correct++;
  }

  var percent = 100;

  var percentage = (correct / 10) * percent;

  var messages = ["Excellent!", "Fair", "Poor, you need to retake the test!"];

  var range;
  if (correct < 5) {
    range = 2;
  }
  if (correct > 5 && correct < 8) {
    range = 1;
  }
  if (correct > 8) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = " You got " + correct + " correct. Which is " + percentage + "%.";

}