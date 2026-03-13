let wordBankTerms = ['Sprint', 'Pole', 'Box Box', 'Cockpit', 'Grand Prix', 'Team Radio', 'Qualifying']; // You can add more words to this array
let wordBankDrivers = ['Hamilton', 'Verstappen', 'Leclerc', 'Sainz', 'Perez', 'Russell', 'Alonso', 'Norris', 'Piastri', 'Gasly']; // You can add more words to this array
let wordBankLocations = ['Monaco', 'Abu Dhabi', 'Silverstone', 'Las Vegas', 'Miami', 'Singapore', 'Azerbaijan', 'Australia', 'Shanghai']; // You can add more words to this array
let guessedLetters = []; // This array will hold the letters the player has guessed
document.addEventListener("DOMContentLoaded", function () {
 // Any code inside this function will run
 // as soon as the page is fully loaded
 startGame();
});
// This is an example function structure
// You will place your game setup logic inside it
function startGame() {
 // Example things your game might do here:
 // • pick the random word
 // • reset variables
 // • build the starting display
 // • update elements on the page
}
// ------------------------------------------------------------
let display = "";   // This variable will hold the string we build for the screen

// Loop through every letter in the secret word
// i starts at 0 because strings use zero-based indexing
// The loop will run once for each character in the word
for (let i = 0; i < secretWord.length; i++) {

 // Get the letter at the current position in the word
 // charAt(i) returns the character located at index i
 let letter = secretWord.charAt(i);


 // Check if this letter exists in the guessedLetters array
 // includes() returns true if the letter exists in the array
 if (guessedLetters.includes(letter)) {

   // If the letter has been guessed,
   // add the letter to the display string
   // A space is added so the letters appear spaced out
   display += letter + " ";

 } else {

do {
 currentPosition++;
 console.log('Current Position: P' + currentPosition); 
} while (guessedLetters !== secretWord);
   display += "_ ";
 }

}
