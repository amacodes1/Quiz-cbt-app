const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const questions = [
    {
        question: "What is 12-10?",
        answers: [
            { text: "2", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "What is 6 + 6?",
        answers: [
            { text: "6", correct: false },
            { text: "3", correct: false },
            { text: "12", correct: true },
            { text: "44", correct: false },
        ]
    },
    {
        question: "What is 10 / 2?",
        answers: [
            { text: "8", correct: false },
            { text: "5", correct: true },
            { text: "16", correct: false },
            { text: "20", correct: false },
        ]
    },
    {
        question: "What is 8 * 8?",
        answers: [
            { text: "64", correct: true },
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "14", correct: false },
        ]
    },
    {
        question: "What is 10 * 10?",
        answers: [
            { text: "10", correct: false },
            { text: "50", correct: false },
            { text: "20", correct: false },
            { text: "100", correct: true },
        ]
    }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();