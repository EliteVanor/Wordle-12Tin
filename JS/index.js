var questions = [
  "What is the word for someone who is very intelligent?",
  "What is the word for something that is very beautiful?",
  "What is the word for someone who is very brave?",
  "What is the word for something that is very funny?",
  "What is the word for someone who is very strong?",
  "What is the word for something that is very fast?",
  "What is the word for someone who is very kind?",
  "What is the word for something that is very important?",
  "What is the word for someone who is very honest?",
  "What is the word for something that is very creative?"
];

var answers = [
  "Erudite",
  "Magnificent",
  "Courageous",
  "Hilarious",
  "Powerful",
  "Rapid",
  "Compassionate",
  "Vital",
  "Truthful",
  "Ingenious"
];



// Get a reference to the HTML elements
var questionButton = document.getElementById("question-button");
var questionElement = document.getElementById("question");
var answerInput = document.getElementById("answer-input");
var submitButton = document.getElementById("submit-button");
var feedbackElement = document.getElementById("feedback");
var hintButton = document.getElementById("hint-button");
var saveButton = document.getElementById("save-button");
var savedAnswerElement = document.getElementById("saved-answer");
var hintCount = 0;
var points = 0;
var isPointIncreased = false;


// Generate a random question
function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Display the question
function displayQuestion() {
  var question = getRandomQuestion();
  document.getElementById("question").innerHTML = question;
  hintCount = 0; // Reset the hint count when the question is reset
  hintButton.style.display = "none"; // Hide the hint button initially
  saveButton.style.display = "none";
  submitButton.style.display = "inline";
  savedAnswerElement.innerHTML = "";
  isPointIncreased = false;
  feedbackElement.innerHTML = " Your current points: " + points;
}

// Display a hint
function displayHint() {
  var currentQuestion = document.getElementById("question").innerHTML;
  var questionIndex = questions.indexOf(currentQuestion);
  if (questionIndex !== -1) {
      if (hintCount < 3) {
          var hint = "Hint " + (hintCount + 1) + ": " + getPartialHint(answers[questionIndex], hintCount + 1);
          if (hintCount === 2) hint = "Last hint: " + getPartialHint(answers[questionIndex], hintCount + 1);
          feedbackElement.innerHTML = hint;
          hintCount++;
      } else {
          feedbackElement.innerHTML = "The answer is " + answers[questionIndex] + ".";
          hintButton.style.display = "none";
          saveButton.style.display = "inline";
          submitButton.style.display = "none";
          isPointIncreased = true;
      }
  }
}

// Get partial hint
function getPartialHint(answer, count) {
  var partialHint = "";
  for (var i = 0; i < count; i++) {
      partialHint += answer.charAt(i);
  }
  return partialHint;
}

// Check the answer
function checkAnswer(answer) {  
  var correctAnswer = answers[questions.indexOf(questionElement.innerHTML, 0)];
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackElement.innerHTML = "Correct!";
    hintButton.style.display = "none";
    saveButton.style.display = "inline";
    submitButton.style.display = "none";
    if (isPointIncreased === false) {
      points++;
      isPointIncreased = true;
    }
  } else {
    feedbackElement.innerHTML = "Incorrect. Try again or use the hint.";
    hintButton.style.display = "inline";
    saveButton.style.display = "none";
  }
  feedbackElement.innerHTML += " Your current points: " + points; // Display current points
}

// Submit the answer
submitButton.addEventListener("click", function () {
  var answer = answerInput.value;
  checkAnswer(answer);
});

var savedAnswers = {}; // Initialize an object to store saved answers for each question

// Save the answer
function saveAnswer() {
    var currentQuestion = document.getElementById("question").innerHTML;
    var questionIndex = questions.indexOf(currentQuestion);
    if (questionIndex !== -1) {
        var correctAnswer = answers[questionIndex];
        savedAnswers[currentQuestion] = correctAnswer;
        savedAnswerElement.innerHTML = "Saved Answer for '" + currentQuestion + "': " + correctAnswer;
    } else {
        savedAnswerElement.innerHTML = "No answer saved. Generate a question first.";
    }
}