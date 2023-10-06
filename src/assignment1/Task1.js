// Task 01 : Explain what falsy values are in JavaScript and provide examples.

// A "falsy" value in js is a value that is considered false when evaluated in a Boolean context.


// The following values are considered falsy in JavaScript:

// false: The boolean value false itself is falsy.

// null: The null value is considered falsy.

// undefined: The undefined value is also considered falsy.

// 0: The number zero (0) is a falsy value.

// NaN: Not-a-Number (NaN) is a falsy value. This typically occurs as the result of invalid mathematical operations.

// [] (Empty array): An empty array is considered falsy.

// {} (Empty object): An empty object is also considered falsy.

// function() {} (Empty function): An empty function is falsy


if (null) {
    console.log("This will not be executed because null is falsy.");
} else {
    console.log("This will be executed because null is falsy.");
}

// output - This will be executed because null is falsy.
//      In this example, the code inside the else block will be executed because null is a falsy value, causing the if condition to be false.

let action;
if (!action) {
    console.log("Action is not completed.");
}

const name = ""; // Empty string
if (!name) {
    console.log("Please enter a name.");
}