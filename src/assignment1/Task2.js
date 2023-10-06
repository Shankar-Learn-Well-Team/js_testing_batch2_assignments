//Simple Guessing Game

const prompt = require('prompt-sync')();


var Guess = Math.floor( (Math.random() * 10) );

let Guessthenumber = prompt("enter a random number between 1 to 10:  ");


while (Guess != Guessthenumber) {
    Guessthenumber = prompt("Re-enter a random number between 1 to 10: ");
}

console.log("Congratulations! You guessed the number: " + Guess);


