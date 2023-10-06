// Note - Task 2
// Que- 1 -  Write a function that performs a mathematical operation (e.g., addition, subtraction, multiplication) based on user input. Utilize both scope and closure to store operation history.
function additon() {
  let a = 5;
  let b = 3;
  return function innerScope()
   {
      let c = 10;

      return function outerScope(){

          return a + b + c;

      } 
  };

};

const toAdd = additon();
const add = toAdd();
const ans =  add();
console.log ("addition" , add);

// Task -2 
// Que - 2 Create a function that reverses a string using recursion. Demonstrate how function hoisting works with this recursive function.

// let ans = "";

let question = "Hello World!";

const n = question.length;

// recusrion means we call the same function inside itself

function outerFN(index) {

// exit condition

if (index < 0) return;

ans += question[index];

// console.log(ans);
outerFN(index - 1);

}
outerFN(n-1);
console.log(ans);

// Task -2 
// Que - 3-  Implement a function that filters an array of strings based on a specific criterion (e.g., strings longer than a certain length). Utilize closures to encapsulate the filter logic.

function outerFN() {

  const inputArr = ["apple", "banana", "kiwi", "strawberry"];

  return function filterArray() {

    let ans = [];

    for (const item of inputArr) {

      // console.log(item);

      if (item.length > 5) {

        ans.push(item);

        console.log(ans);

      }
   }
    return ans;

  }

}

const filterFunction = outerFN();

const output = filterFunction(); 

console.log("Final Ans:", output);