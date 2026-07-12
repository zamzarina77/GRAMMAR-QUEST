let currentQuestion = 0;
let selectedAnswer = null;

// HTML elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit-btn");
const progressFill = document.querySelector(".progress-fill");
const currentQuestionText = document.getElementById("current-question");
const hootMessage = document.getElementById("hoot-message");

// ----------------------------
// Load Question
// ----------------------------

function loadQuestion() {

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;

    answersElement.innerHTML = "";

    selectedAnswer = null;

    currentQuestionText.textContent = currentQuestion + 1;

    progressFill.style.width = ((currentQuestion + 1) / questions.length * 100) + "%";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = option;

        button.onclick = () => {

            document
                .querySelectorAll(".answer-btn")
                .forEach(btn => btn.style.background = "#ffffff15");

            button.style.background = "#FFD54A";
            button.style.color = "#000";

            selectedAnswer = index;

        };

        answersElement.appendChild(button);

    });

}

// ----------------------------
// Submit
// ----------------------------

submitButton.addEventListener("click", () => {

    if (selectedAnswer === null) {

        alert("Please choose an answer.");

        return;

    }

    const correct = questions[currentQuestion].answer;

    if (selectedAnswer === correct) {

        hootMessage.textContent =
            "✨ Excellent! The forest is becoming brighter!";

    }

    else {

        hootMessage.textContent =
            "🌱 Good try! Every challenge makes you stronger.";

    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        setTimeout(() => {

            loadQuestion();

        }, 1000);

    }

    else {

        setTimeout(() => {

            alert("🎉 Whispering Forest Completed!");

            // Later:
            // window.location.href = "kingdom.html";

        }, 1000);

    }

});

// ----------------------------

loadQuestion();