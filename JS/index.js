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

// Generate a random question
function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Display the question
function displayQuestion() {
  var question = getRandomQuestion();
  document.getElementById("question").innerHTML = question;
}

// Check the answer
function checkAnswer(answer) {
  var correctAnswer = answers[questions.indexOf(questionElement.innerHTML, 0)];
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      feedbackElement.innerHTML = "Correct!";
  } else {
      feedbackElement.innerHTML = "Incorrect. The correct answer is " + correctAnswer + ".";
  }
}

// Submit the answer
submitButton.addEventListener("click", function () {
  var answer = document.getElementById("answer-input").value;
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
        document.getElementById("saved-answer").innerHTML = "Saved Answer for '" + currentQuestion + "': " + correctAnswer;
    } else {
        document.getElementById("saved-answer").innerHTML = "No answer saved. Generate a question first.";
    }
}