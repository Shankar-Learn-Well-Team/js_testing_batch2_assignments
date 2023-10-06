// 2: Implement a simple guessing game.
//  Generate a random number between 1 and 10 
//  and ask the user to guess it.


const prompt = require('prompt-sync')();

let random_number = Math.floor((Math.random() * 10) + 1);


let Guess = prompt('Guess a number from 1 to 10: ');
console.log(Guess);

while(random_number!= Guess){
    Guess= prompt('Guess a number from 1 to 10: ');
}

if(random_number==Guess){   
    console.log("You guessed it :) "+ "random number:" + random_number + " Guessed Number: " + Guess);
}