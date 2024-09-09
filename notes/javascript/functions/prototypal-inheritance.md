# Prototypal Inheritance in JavaScript

Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects through their prototypes. This guide covers key aspects of prototypal inheritance in JavaScript.

## Outline

1. What is a Prototype?
2. Prototype Equality: `__proto__` vs. `prototype`
3. Prototypal Inheritance
4. Achieving Prototypal Inheritance in Regular Functions
5. Does Changing `__proto__` Also Update `prototype`?
6. The `Object.getPrototypeOf()` Method
7. Overriding Prototypal Methods
8. The `hasOwnProperty()` Method
9. Multiple Levels of Prototypal Inheritance
10. Pitfalls and Considerations
11. Real-World Examples
12. ES6 `class` Syntax and Prototypal Inheritance

## What is a Prototype?

In JavaScript, every object has a `prototype`. A prototype is an object that contains properties and methods that can be shared by other objects. Objects can access these shared properties and methods through their prototype chain.

## Prototype Equality: `__proto__` vs. `prototype`

-   `__proto__`: It is a special property that references the prototype of an object. It is used to access the object's prototype.
-   `prototype`: It is a property of constructor functions and is used to define the prototype for objects created with that constructor.

## Prototypal Inheritance

Prototypal inheritance allows objects to inherit properties and methods from their prototypes. When a property or method is accessed on an object, JavaScript looks for it in the object first. If not found, it searches in the object's prototype, and this process continues up the prototype chain.

## Achieving Prototypal Inheritance in Regular Functions

Prototypal inheritance can be achieved using regular functions. Objects created from a constructor function inherit properties and methods defined in the constructor's `prototype`.

```javascript
// Prototypal Inheritance Example
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Output: Buddy makes a sound.
```

In this example, `Dog` inherits the `speak` method from the `Animal` prototype.

## Does Changing `__proto__` Also Update `prototype`?

No, changing an object's `__proto__` does not update the `prototype` of the constructor function. The `prototype` property of a constructor is used when creating new objects with that constructor.

```javascript
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

function Car(make, model) {
    Vehicle.call(this, make, model);
}

const myCar = new Car('Toyota', 'Camry');

// Changing __proto__ does not affect prototype
myCar.__proto__.year = 2020;
console.log(myCar.year); // Output: 2020

// Changing prototype does not affect __proto__
Vehicle.prototype.color = 'Blue';
console.log(myCar.color); // Output: undefined
```

## The `Object.getPrototypeOf()` Method

You can use the `Object.getPrototypeOf()` method to access an object's prototype. It provides an alternative way to interact with prototypes.

```javascript
const myObject = {};
const proto = Object.getPrototypeOf(myObject);
console.log(proto === Object.prototype); // Output: true
```

## Overriding Prototypal Methods

You can override methods inherited from a prototype in a subclass. The overridden method in the subclass takes precedence over the one in the prototype.

```javascript
// Overriding Prototypal Methods Example
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

function Cat(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);

// Override the speak method in Cat
Cat.prototype.speak = function () {
    console.log(`${this.name} says Meow!`);
};

const myCat = new Cat('Whiskers', 'Siamese');
myCat.speak(); // Output: Whiskers says Meow!
```

In this example, the `speak` method is overridden in the `Cat` subclass.

## The `hasOwnProperty()` Method

The `hasOwnProperty()` method allows you to check if a property exists directly on an object (not inherited from the prototype).

```javascript
const myObject = {
    prop1: 'Value 1',
};

console.log(myObject.hasOwnProperty('prop1')); // Output: true
console.log(myObject.hasOwnProperty('toString')); // Output: false
```

## Multiple Levels of Prototypal Inheritance

Prototypal inheritance supports multiple levels, where objects inherit from objects that themselves inherit from other objects. This allows for complex inheritance hierarchies.

## Pitfalls and Considerations

## Real-World Examples

## ES6 `class` Syntax and Prototypal Inheritance

ES6 introduced a more user-friendly way to work with prototypes using class syntax.

```
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    // You can add new methods specific to Dog
    fetch() {
        console.log(`${this.name} fetches a ball.`);
    }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Output: Buddy makes a sound.
myDog.fetch(); // Output: Buddy fetches a ball.
```

## Conclusion

Prototypal inheritance is a key concept in JavaScript that allows objects to share properties and methods through their prototypes. Understanding how prototypes work is crucial for effective JavaScript programming.
