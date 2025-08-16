const questions = [
  {
    question:
      "A number that can only be divided by one and it's self. Called_______",
    answers: [
      { text: "Index", correct: false },
      { text: "Factor", correct: false },
      { text: "Whole", correct: false },
      { text: "Prime", correct: true },
    ],
  },
  {
    question: "The sum of 3 days, 2 days, and 48 hours give ______ Week?",
    answers: [
      { text: "1 week", correct: true },
      { text: "2 weeks", correct: false },
      { text: "3 weeks", correct: false },
      { text: "4 weeks", correct: false },
    ],
  },
  {
    question: "The sum of  2/5  and 8/5 is equal to_______",
    answers: [
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question:
      "Numbers that can divide any given number without remainder are called...",
    answers: [
      { text: "Prime", correct: false },
      { text: "Odd", correct: false },
      { text: "Factor", correct: true },
      { text: "Even", correct: false },
    ],
  },
  {
    question: "Express 1/2  as Percentage",
    answers: [
      { text: "50%", correct: true },
      { text: "30%", correct: false },
      { text: "10%", correct: false },
      { text: "25%", correct: false },
    ],
  },
  {
    question: "The value of 0 in 104,529 is _________",
    answers: [
      { text: "Million%", correct: false },
      { text: "Ten Thousand", correct: true },
      { text: "Hundred Thousand", correct: false },
      { text: "Thousand", correct: false },
    ],
  },
  {
    question: "Which of the following is not equivalent to  1/2",
    answers: [
      { text: "20/40", correct: false},
      { text: "5/10", correct: false },
      { text: "5/15", correct: true },
      { text: "7/14", correct: false },
    ],
  },
  {
    question: "Gramme is the basic unit of _______",
    answers: [
      { text: "Capacity", correct: false },
      { text: "Mass", correct: true },
      { text: "Time", correct: false },
      { text: "Length", correct: false },
    ],
  },
  {
    question: "9km is equivalent to _______ In meter",
    answers: [
      { text: "900m", correct: false },
      { text: "90m", correct: false },
      { text: "0.009m", correct: false },
      { text: "9000m", correct: true },
    ],
  },
  {
    question: "How many minutes make 10 hours",
    answers: [
      { text: "0.6 minutes", correct: false },
      { text: "600 minutes", correct: true },
      { text: "60 minutes", correct: false },
      { text: "6,000 minutes", correct: false },
    ],
  },
];

const Ques1Image = document.getElementById("Qst1");
const questionText = document.getElementById("question-text");
const answerButtonsContainer = document.getElementById("options-container");
const button = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreArea = document.getElementById("score-area");
const restartButton = document.getElementById("restart-btn");
const mainContainer = document.getElementById("main-container");

// Quiz state
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  scoreArea.style.display = "none";
  questionText.style.display = "block";
  answerButtonsContainer.style.display = "grid";
  showQuestion();
}

// Function to display the current question
function showQuestion() {
  // Clear previous buttons
  while (answerButtonsContainer.firstChild) {
    answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
  }

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionText.textContent = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtonsContainer.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  // Disable all buttons
  Array.from(answerButtonsContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  // Update score and highlight selected button
  if (isCorrect) {
    score++;
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Show the next button
  nextButton.style.display = "block";
  i;
}

// Function to handle the next button click
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    nextButton.style.display = "none";
    showQuestion();
  } else {
    showScore();
  }
}

// Function to display the final score
function showScore() {
  questionText.style.display = "none";
  answerButtonsContainer.style.display = "none";
  nextButton.style.display = "none";
  scoreArea.textContent = `You scored ${score} out of ${questions.length}!`;
  scoreArea.style.display = "block";
  restartButton.style.display = "block";
}

// Event listeners for control buttons
nextButton.addEventListener("click", handleNextButton);
// restartButton.addEventListener("click", startQuiz);

// Start the quiz when the page loads
startQuiz();
function showSidebar() {
  const showNav = document.querySelector(".side-Bar");
  showNav.style.display = "flex";
}

function hideSidebar() {
  const hideNav = document.querySelector(".side-Bar");
  hideNav.style.display = "none";
}
