let wordBankTerms = ['Sprint', 'Pole', 'Box Box', 'Cockpit', 'Grand Prix', 'Team Radio', 'Qualifying', 'Halo', 'DRS', 'Downforce'];
let wordBankDrivers = ['Hamilton', 'Verstappen', 'Leclerc', 'Sainz', 'Perez', 'Russell', 'Alonso', 'Norris', 'Piastri', 'Gasly'];
let wordBankLocations = ['Monaco', 'Abu Dhabi', 'Silverstone', 'Las Vegas', 'Miami', 'Singapore', 'Azerbaijan', 'Australia', 'Shanghai'];

let guessedLetters = [];
let wrongGuesses = [];
let secretWord = "";
let maxWrong = 6;

document.addEventListener("DOMContentLoaded", function () {
    // Difficulty buttons
    document.getElementById("Easymode").addEventListener("click", () => startGame(wordBankLocations));
    document.getElementById("Intermediatemode").addEventListener("click", () => startGame(wordBankDrivers));
    document.getElementById("Difficultmode").addEventListener("click", () => startGame(wordBankTerms));
});

function startGame(wordBank) {
    document.getElementById("result1").style.display = "none";
    document.getElementById("result2").style.display = "none";
    guessedLetters = [];
    wrongGuesses = [];
    secretWord = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();

    console.log("Secret Word:", secretWord); // for testing

    updateDisplay();
    updateWrongGuesses();
}

function updateDisplay() {
    let display = "";

    for (let i = 0; i < secretWord.length; i++) {
        let letter = secretWord[i];

        if (letter === " ") {
            display += "  ";
        } else if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }

    document.getElementById("display").innerHTML = display;

    checkWin();
}

function pressButton(button) {
    if (button === "Reset") {
        startGame([secretWord]); // Restart with the same word
    }
}

function pressLetter(letter) {
    letter = letter.toUpperCase();

    // Prevent duplicate guesses
    if (guessedLetters.includes(letter) || wrongGuesses.includes(letter)) {
        return;
    }

    if (secretWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongGuesses.push(letter);
    }

    updateDisplay();
    updateWrongGuesses();
    checkLose();
}

function updateWrongGuesses() {
    document.getElementById("cardTitle").innerHTML =
        "Wrong Guesses: " + wrongGuesses.join(", ");
}

function checkWin() {
    let won = true;

    for (let i = 0; i < secretWord.length; i++) {
        let letter = secretWord[i];

        if (letter !== " " && !guessedLetters.includes(letter)) {
            won = false;
            break;
        }
    }

    if (won) {
        document.getElementById("result1").style.display = "block";
    }
}

function checkLose() {
    if (wrongGuesses.length >= maxWrong) {
        document.getElementById("result2").style.display = "block";
    }
}