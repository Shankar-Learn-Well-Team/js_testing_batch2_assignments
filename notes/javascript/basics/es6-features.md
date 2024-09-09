# ES6 Features in JavaScript

ECMAScript 2015, also known as ES6, brought significant enhancements and new features to JavaScript. These features have since become an integral part of modern JavaScript development. In this guide, we'll explore some of the most notable ES6 features.

## Table of Contents

1. [Let and Const Declarations](#let-and-const-declarations)
2. [Arrow Functions](#arrow-functions)
3. [Template Literals](#template-literals)
4. [Default Parameters](#default-parameters)
5. [Destructuring Assignment](#destructuring-assignment)
6. [Rest and Spread Operators](#rest-and-spread-operators)
7. [Classes](#classes)
8. [Modules](#modules)
9. [Promises](#promises)
10. [Enhanced Object Literals](#enhanced-object-literals)
11. [Iterators and Generators](#iterators-and-generators)
12. [Map and Set](#map-and-set)
13. [Symbol](#symbol)
14. [Async/Await](#asyncawait)
15. [Other Features](#other-features)

## Let and Const Declarations

ES6 introduced block-scoped variable declarations using `let` and `const`, replacing `var`. `let` allows reassignment, while `const` declares immutable variables.

```javascript
let count = 0;
count = 1; // Valid

const pi = 3.14159;
pi = 3.14; // Invalid (immutable)
```

## Arrow Functions

Arrow functions provide a concise syntax for defining functions, with implicit return and lexical `this` binding.

```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## Template Literals

Template literals allow multi-line strings and variable interpolation using `${}`.

```javascript
const name = 'Alice';
const message = `Hello, ${name}!
How are you today?`;
```

## Default Parameters

Functions can have default parameter values, making it easier to handle missing or undefined arguments.

```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Alice'); // Hello, Alice!
```

## Destructuring Assignment

Destructuring assignment enables extracting values from objects and arrays using a concise syntax.

```javascript
// Destructuring objects
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

const person = {
    name: 'Alice',
    age: undefined,
    educatiom: 'BSC',
    customKey: null,
};
const { name: personName, age = 20, customKey = 'hello' } = person;

// Destructuring arrays
const numbers = [10, 20, undefined, 40, 'Hello World'];
const [first, second, third = '30'] = numbers;
```

## Rest and Spread Operators

The rest (`...`) and spread (`...`) operators simplify working with variable-length argument lists and arrays.

```javascript
// Rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function checkParam(firstParam, secondParam, ...numbers) {
    console.log(numbers);
    console.log(firstParam);
    console.log(secondParam);
}

function bulkOperationByDigit(operation, digit, ...numbers) {
    if (operation == 'addBy') {
        return numbers.map((number) => {
            return number + digit;
        });
    } else if (operation == 'mulBy') {
        return numbers.map((number) => number * digit);
    }
    return;
}

bulkOperationByDigit('mulBy', 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
```

## Classes

ES6 introduced class syntax for creating constructor functions and prototypes, making object-oriented programming more accessible.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const alice = new Person('Alice');
alice.sayHello();
```

## Modules

Modules provide a standardized way to organize and share code between files using `import` and `export`.

```javascript
// MathUtils.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './MathUtils';
console.log(add(1, 2));
```

## Promises

Promises simplify asynchronous operations, improving error handling and readability.

```javascript
fetch('https://api.example.com/data')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
```

## Enhanced Object Literals

Object literals can have concise method syntax, computed property names, and shorthand property assignments.

```javascript
const name = 'Alice';
const age = 30;

const person = {
    name,
    age,
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
```

## Iterators and Generators

Iterators and generators allow custom iteration and lazy evaluation of data.

```javascript
function* fibonacci() {
    let a = 0,
        b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
```

## Map and Set

Map and Set collections provide new data structures for storing key-value pairs and unique values.

```javascript
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);

const mySet = new Set([1, 2, 3, 2, 1]);
```

## Symbol

Symbols are unique and immutable values, useful for creating private object properties.

```javascript
const id = Symbol('uniqueId');
const obj = {
    [id]: 42,
};
console.log(obj[id]);
```

## Async/Await

Async/await simplifies asynchronous code by allowing the use of `await` within async functions, providing a more synchronous style.

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

## Other Features

ES6 introduced various other features, including the `for...of`
