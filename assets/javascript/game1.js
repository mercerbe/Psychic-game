//Game variables
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var guessesLogged = [];
var currentGuess = null;
var psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("psychic letter: " + psychicLetter);

//Game function
document.onkeyup = function(event) {

  var currentGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesLogged.indexOf(currentGuess) < 0 && alphabet.indexOf(currentGuess) >= 0){
      guessesLogged[guessesLogged.length] = currentGuess;//use push to guessesLogged?
      guessesLeft--;
    };

    if (psychicLetter === currentGuess) {
      wins++;
      alert("You Win!");
      guessesLeft = 12;
      guessesLogged = [];
      psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("psychic letter: " + psychicLetter);
      };

    if (guessesLeft === 0) {
      losses++;
      alert("You Lost!");
      guessesLeft = 12;
      guessesLogged = [];
      psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("psychic letter: " + psychicLetter);
    };

//HTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesLogged").innerHTML = guessesLogged;
    var resetButton = document.querySelector("#resetButton");
    resetButton.style.cursor = "pointer";

}
