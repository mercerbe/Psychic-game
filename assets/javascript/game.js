
//Variables//

//Game Variables//
var userGuesses = [];
document.getElementById("userGuesses").innerHTML = userGuesses;
document.getElementById("input").innerHTML = input;
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//Input Output Variables//
var guessesLeft = 12;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
var wins = 0;
document.getElementById("wins").innerHTML = wins;
var losses = 0;
document.getElementById("losses").innerHTML = losses;

//buttons//
var startGameButton = document.querySelector("#startGame");
startGameButton.style.cursor = "pointer";
startGameButton.addEventListener("click", startGame, false);
var guessButton = document.querySelector("#guessButton");
guessButton.style.cursor = "pointer";
guessButton.addEventListener("click", gamePlay, false);
var resetButton = document.querySelector("#resetButton");
resetButton.style.cursor = "pointer";



//Main Functions//

//starting Game Function//
function startGame() {
  console.clear();
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(computerGuess);
  guessesLeft = 12;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  console.log(guessesLeft);
  userGuesses = [];
  document.getElementById("userGuesses").innerHTML = userGuesses;
  console.log(userGuesses);

};

//Guessing Function//
function gamePlay() {
  userGuesses.push(input.value);
  document.getElementById("userGuesses").innerHTML = userGuesses;
  console.log(userGuesses);


 if (userGuesses != computerGuess) {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  guessesLeft--
  console.log(guessesLeft);
      if (guessesLeft === 1) {
          alert("Last Guess!");
        }


} else if (input.value === computerGuess) {
  document.getElementById("wins").innerHTML = wins;
  wins++;
  var playAgain = confirm("You win... Play again?");
    if (playAgain == true) {
      startGame();

    } else {
      alert("Thanks, Come Play Again Soon!")
    }
} else if (guessesLeft === 0) {
        document.getElementById("losses").innerHTML = losses;
        losses++;
        playAgain;
      }


};
