
//task1-->write a function 'greet' that takes a name as an argument and return a greeting msg

function greet(name) {
    return `Good Morning, ${name}!`;
}

console.log(greet("Pooja")); // Output: "Good Morning, Pooja!"

//task2-->call the 'greet' function with diff names and print the greetings.

const name1 = "Harshal";
const name2 = "Dharmesh";
const name3 = "Gargi";

console.log(greet(name1)); // Output: "Good Morning, Pooja!"
console.log(greet(name2)); // Output: "Hello, Dharmesh!"
console.log(greet(name3)); // Output: "Hello, Gargi!"

//with call() Function Prototype Method
const person1 = {
    firstName: 'Pooja',
    lastName: 'Galgate',
};

const person2 = {
    firstName: 'Harshada',
    lastName: 'Patil',
};

function greet1(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

greet1.call(person1, "Hello")
greet1.call(person2, "Hey")

//with method of an object
const person = {
    firstName: 'Preeti',
    lastName: 'Sharma',
    greet: function () {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    },
};

console.log(person.greet()); // Output: "Hello, Preeti Sharma!"