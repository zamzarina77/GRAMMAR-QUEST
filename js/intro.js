// ==========================================
// GRAMMAR QUEST - INTRO
// ==========================================

const dialogues = [

"Welcome, brave adventurer!",

"I am Professor Hoot, Guardian of the Grammar Kingdom.",

"Our magical Grammar Crystals have been stolen.",

"Without them, grammar across the kingdom is falling into chaos.",

"You must travel through enchanted lands and recover every crystal.",

"Only courage, wisdom, and excellent grammar can save our kingdom.",

"Will you accept this quest and become our Grammar Hero?"

];

const dialogueText = document.getElementById("dialogue-text");
const acceptBtn = document.getElementById("acceptBtn");

let dialogueIndex = 0;
let charIndex = 0;

function typeWriter() {

    if (charIndex < dialogues[dialogueIndex].length) {

        dialogueText.innerHTML += dialogues[dialogueIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 40);

    } else {

        setTimeout(nextDialogue, 1000);

    }

}

function nextDialogue() {

    dialogueIndex++;

    charIndex = 0;

    if (dialogueIndex < dialogues.length) {

        dialogueText.innerHTML = "";

        typeWriter();

    } else {

        acceptBtn.style.display = "block";

    }

}

acceptBtn.addEventListener("click", function () {

    acceptBtn.innerHTML = "✨ Excellent! Let the adventure begin...";

    setTimeout(function () {

        window.location.href = "kingdom.html";

    }, 1500);

});

typeWriter();