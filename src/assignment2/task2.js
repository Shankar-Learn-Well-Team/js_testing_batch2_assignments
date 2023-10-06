// ### 4. Data Transformation

// -   **Task**: Develop an object constructor that represents a person with properties such as name, age, and city. Create methods within the object that allow for updating these properties using the `this` keyword and closures.
// -   **Demonstrate using**: Object Constructor, this Keyword, Closure
// -   **Input**: Initial person object with name "Alice," age 30, and city "New York."
// -   **Output**: Updated person object with name "Bob," age 25, and city "Los Angeles."

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.updatedata = function (uname, uage, ucity) {
    this.name = uname;
    this.age = uage;
    this.city = ucity;
  };
}

const inputval = new Person("Alice", 30, "New York");
console.log(inputval);
console.log("Updated Person Property- ")
inputval.updatedata("Bob", 25, "Los Angeles");
console.log(inputval);

// ### 5. Math Series

// -   **Task**: Write a program that generates a series of numbers (e.g., Fibonacci sequence, prime numbers) and uses function hoisting and closures to efficiently calculate and store these numbers.
// -   **Demonstrate using**: Hoisting, Closure, Algorithm
// -   **Input**: Generating the first 10 prime numbers.
// -   **Output**: Prime numbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

function primeno() {
  let localVar;
     return function innerScope() {
        for (let i = 2; i <= 30; i++) {
        localVar = 0;
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
            localVar++;
            }
        }
        if (localVar == 2) {
            console.log("Prime no - "+ i);
        }
     }
  };
}

const innerScopeFunc = primeno();
innerScopeFunc();

// ### 1. Sum Calculator

// -   **Task**: Write a function that performs a mathematical operation (e.g., addition, subtraction, multiplication) based on user input. Utilize both scope and closure to store operation history.
// -   **Demonstrate using**: Scope, Closure
// -   **Input**: User selects addition and enters numbers 5 and 3.
// -   **Output**: Result of addition: 8


function operation(operation) {
  return function (a, b) {
      if (operation == "add") {
        return a + b;
      } else if (operation == "mul") {
        return a * b;
      } else if (operation == "sub") {
        return a - b;
      } else if (operation == "div") {
        return a / b;
      }
  };
}
const innerScopeFunction = operation("add");
console.log(innerScopeFunction(5, 5));
