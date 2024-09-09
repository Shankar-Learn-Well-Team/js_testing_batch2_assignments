# JavaScript Closures

Closures are a powerful and fundamental concept in JavaScript. They allow functions to maintain access to variables from their parent or outer scope, even after the parent function has completed execution. Understanding closures is crucial for advanced JavaScript programming.

## What Are Closures?

Closures are an essential concept that enables JavaScript functions to "close over" variables from their outer lexical scope. This means that closures retain access to those variables, even when they would normally go out of scope.

## How Closures Work

Closures work by maintaining references to their outer variables. This ensures that the values of those variables are preserved, even if the outer function has finished executing.

### Example of Closure

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 1
```

In this example, `createCounter` returns a function that maintains access to the `count` variable, creating independent counter instances.

## Correlation between Closures and Lexical Scopes

Closures and lexical scopes are closely related. Lexical scope determines the availability of variables and functions at the point where they are defined in your code, not where they are executed. This lexical scope is what closures rely on to capture and "close over" variables.

When a function is defined within another function, it creates a closure. This closure maintains a reference to the outer function's lexical environment, preserving the state of variables in that environment. As a result, even when the outer function completes execution, the inner function, being a closure, still has access to those variables.

## Practical Use Cases

### 1. Data Encapsulation

Closures enable data encapsulation by allowing you to create private variables and functions. This protects data from external modification and provides a clean interface for working with the data.

```javascript
// Example 2
function createPerson(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    // Public methods to access private variables
    return {
        getName: function () {
            return _name;
        },
        getAge: function () {
            return _age;
        },
        changeName: function (newName) {
            _name = newName;
        },
        changeAge: function (newAge) {
            _age = newAge;
        },
    };
}

const person = createPerson('Alice', 30);
console.log(person.getName()); // Outputs: Alice
console.log(person.getAge()); // Outputs: 30

// Modifying the private variables using public methods
person.changeName('Bob');
person.changeAge(35);
console.log(person.getName()); // Outputs: Bob
console.log(person.getAge()); // Outputs: 35
```

### 2. Function Factories

Closures can be used to create function factories, where you generate functions with unique configurations or behavior based on the closure's state.

```javascript
function createGreeter(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const greetHello = createGreeter('Hello');
const greetHi = createGreeter('Hi');

greetHello('Alice'); // Outputs: Hello, Alice!
greetHi('Bob'); // Outputs: Hi, Bob!
```

### 3. Currying

Currying is a technique that uses closures to transform a function that takes multiple arguments into a series of functions, each taking one argument. This enables the creation of reusable and partially applied functions.

### Example of Currying

```javascript
function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

const addFive = curriedAdd(5);

console.log(addFive(3)); // Output: 8
```

In this example, the `curry` function uses closures to create a curried version of the `add` function.

### 4. Higher-Order Functions

Closures play a significant role in higher-order functions. These are functions that can accept other functions as arguments or return functions as results. Closures are often used to implement callbacks and functions that modify or enhance other functions.

### Example of Higher-Order Function

```javascript
function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

In this example, `multiplier` is a higher-order function that returns a closure-based function to perform multiplication.

## Conclusion

Closures are a powerful feature in JavaScript that allows you to create flexible and encapsulated code. Understanding closures, along with their practical use cases like currying and higher-order functions, is essential for mastering advanced JavaScript concepts and patterns.
