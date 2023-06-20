$(document).ready(function () {
  $("#vital").click(function () {
    $(".vital-class").show();
    $(".notes-class").hide();
    $(".labs-class").hide();
    $(".image-class").hide();
    $(".encounters-class").hide();
  });
  $("#notes").click(function () {
    $(".vital-class").hide();
    $(".notes-class").show();
    $(".labs-class").hide();
    $(".image-class").hide();
    $(".encounters-class").hide();
  });
  $("#labs").click(function () {
    $(".vital-class").hide();
    $(".notes-class").hide();
    $(".labs-class").show();
    $(".image-class").hide();
    $(".encounters-class").hide();
  });
  $("#image").click(function () {
    $(".vital-class").hide();
    $(".notes-class").hide();
    $(".labs-class").hide();
    $(".image-class").show();
    $(".encounters-class").hide();
  });
  $("#encounters").click(function () {
    $(".vital-class").hide();
    $(".notes-class").hide();
    $(".labs-class").hide();
    $(".image-class").hide();
    $(".encounters-class").show();
  });
});
let interval;
var i = 1;
var bodyElement = document.getElementById("body");

function startTimer(duration, display) {
  var timer = duration;
  var minutes;
  var seconds;

  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      if (i === 1) {
        clearInterval(interval);
        console.log(interval);
        hideContent();
        i++;
        return 0;
      }
      if (i === 2) {
        clearInterval(interval);
        saveAnswers();
        i++;
        return 0;
      }
      if (i === 3) {
        i++;
      }
    }
  }, 10);
}

function hideContent() {
  resetDisplay();
  document.getElementById("notes-class").style.display = "none";
  document.getElementById("questions").style.display = "block";
  bodyElement.style.backgroundColor = "lightgrey";
  document.getElementById("ftco-navbar").style.display = "none";
  document.getElementById("timer").innerHTML = "5:00";
  startTimer(fiveMinutes, display);
}

function resetDisplay() {
  const elements = document.querySelectorAll('.notes-class, .vital-class, .labs-class, .image-class, .encounters-class');
  let hasBlock = false;

  for (let i = 0; i < elements.length; i++) {
    const computedStyle = window.getComputedStyle(elements[i]);
    if (computedStyle.display === 'block') {
      hasBlock = true;
      break;
    }
  }

  if (hasBlock) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }
}



var fiveMinutes = 4 * 60;
var fourMinutes = 5 * 60;
var fifMinutes = 14 * 60;
var display = document.getElementById("timer");
startTimer(fourMinutes, display);

window.addEventListener("DOMContentLoaded", function () {
  var popupContainer = document.getElementById("popupContainer");
  var gotItButton = document.getElementById("gotItButton");

  gotItButton.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  // Show the popup when the page loads
  popupContainer.style.display = "block";
});

window.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Add click event listeners to each nav link
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      // Remove the 'nav-active' class from all nav links
      navLinks.forEach(function (link) {
        link.classList.remove("nav-active");
      });

      // Add the 'nav-active' class to the clicked nav link
      this.classList.add("nav-active");
    });
  });
});

function saveAnswers() {
  clearInterval(interval);
  var answer1 = document.getElementById("answer1").value;
  var answer2 = document.getElementById("answer2").value;
  var answer3 = document.getElementById("answer3").value;
  var answer4 = document.getElementById("answer4").value;

  bodyElement.style.backgroundColor = "grey";

  var result1 = document.getElementById("result1");
  result1.innerHTML = "<h4>" + q1 + "</h4><p>Answer:" + answer1 + "</p>";

  var result2 = document.getElementById("result2");
  result2.innerHTML = "<h4>" + q2 + "</h4><p>Answer:" + answer2 + "</p>";

  var result3 = document.getElementById("result3");
  result3.innerHTML = "<h4>" + q3 + "</h4><p>Answer:" + answer3 + "</p>";

  var result4 = document.getElementById("result4");
  result4.innerHTML = "<h4>" + q4 + "</h4><p>Answer:" + answer4 + "</p>";

  document.getElementById("questions").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("timer").style.display = "none";
  return 0;
}

var q1 = (document.getElementById("question1-detail").innerHTML =
  "Question:1 Write about yourself");
var q2 = (document.getElementById("question2-detail").innerHTML =
  "Question:2 What is your hobby?");
var q3 = (document.getElementById("question3-detail").innerHTML =
  "Question:3 Write somrthing about your experience.");
var q4 = (document.getElementById("question4-detail").innerHTML =
  "Question:4 Write about Gen-Z");

function mcqScreen() {
  document.getElementById("results").style.display = "none";
  document.getElementById("timer").style.display = "block";
  document.getElementById("timer").innerHTML = "14:00";
  startTimer(fifMinutes, display);
  document.getElementById("mcq").style.display = "block";
}

// Submit the quiz
function submitQuiz() {
  clearInterval(interval);
  var quizElement = document.getElementById("quiz");
  var submitButton = document.getElementById("submitBtn");
  var resultsElement = document.getElementById("mcq-results");

  // Hide the quiz and show the results
  document.getElementById("timer").style.display = "none";
  quizElement.style.display = "none";
  submitButton.style.display = "none";
  resultsElement.style.display = "block";

  // Process each question
  try {
    processQuestion("q1", "b", "Answer 1: The capital of France is Paris.");
    processQuestion(
      "q2",
      "c",
      "Answer 2: The largest planet in our solar system is Jupiter."
    );
    processQuestion(
      "q3",
      "b",
      "Answer 3: HTML stands for Hyper Text Markup Language."
    );
    processQuestion(
      "q4",
      "a",
      "Answer 4: The chemical symbol for water is H2O."
    );
    processQuestion(
      "q5",
      "b",
      "Answer 5: The Pacific Ocean is the largest ocean on Earth."
    );
    processQuestion(
      "q6",
      "c",
      "Answer 6: JavaScript is a programming language commonly used for web development."
    );
    processQuestion("q7", "a", "Answer 7: The square root of 144 is 12.");
    processQuestion(
      "q8",
      "c",
      "Answer 8: The United States of America has 50 states."
    );
    processQuestion(
      "q9",
      "b",
      "Answer 9: CSS stands for Cascading Style Sheets."
    );
    processQuestion(
      "q10",
      "a",
      "Answer 10: The formula E=mc^2 is associated with Albert Einstein."
    );
  } catch (e) {
    console.log(e);
  }
}

// Process an individual question
function processQuestion(questionId, correctAnswer, explanation) {
  var questionResult = document.getElementById(questionId + "Result");

  try {
    var selectedAnswer = document.querySelector(
      'input[name="' + questionId + '"]:checked'
    ).value;

    // Continue with the rest of your code using the selectedAnswer variable
  } catch (error) {
    // Handle the error
    console.log("Error: Value not found");
  }

  if (selectedAnswer === correctAnswer) {
    questionResult.textContent = "correct";
    questionResult.style.color = "green";
  } else {
    questionResult.textContent = "incorrect";
    questionResult.style.color = "red";
  }

  var explanationElement = document.createElement("p");
  explanationElement.textContent = explanation;
  questionResult.parentNode.appendChild(explanationElement);
}

function goHome() {
  document.getElementById("mcq").style.display = "none";
  bodyElement.style.backgroundColor = "#fff";
  document.getElementById("mcq-results").style.display = "none";
  document.getElementById("notes-class").style.display = "block";
  document.getElementById("ftco-navbar").style.display = "block";
}

// Listen for the submit button click
var submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", submitQuiz);

var submitButton = document.getElementById("goHome");
submitButton.addEventListener("click", goHome);
