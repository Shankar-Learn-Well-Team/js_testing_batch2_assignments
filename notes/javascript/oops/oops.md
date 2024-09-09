# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that enables the organization and structuring of code around objects and their interactions. In JavaScript, OOP can be implemented using older versions of the language (ECMAScript 5 and earlier) by utilizing constructor functions and prototypes.

## Creating Classes in Older JavaScript

In older versions of JavaScript, classes are implemented using constructor functions. These functions serve as blueprints for creating objects. You can define properties and methods inside constructor functions to create instances with shared characteristics.

```javascript
// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Creating instances of the Person class
const john = new Person('John', 30);
const alice = new Person('Alice', 25);

john.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
alice.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old.
```

In this example, `Person` is a constructor function used to create instances of the `Person` class with `name` and `age` properties.

## OOP Principles

### 1. Encapsulation

Encapsulation involves bundling data (properties) and methods (functions) that operate on that data within a single unit (object). This prevents direct access to an object's internal state from outside the object.

```javascript
// Encapsulation in JavaScript
function Circle(radius) {
    // Private property
    let _radius = radius;

    // Public method to get radius
    this.getRadius = function () {
        return _radius;
    };

    // Public method to set radius
    this.setRadius = function (newRadius) {
        if (newRadius >= 0) {
            _radius = newRadius;
        }
    };
}

const myCircle = new Circle(5);
console.log(myCircle.getRadius()); // Output: 5
myCircle.setRadius(10);
console.log(myCircle.getRadius()); // Output: 10
```

In this example, `_radius` is a private property, and `getRadius` and `setRadius` are public methods for encapsulation.

### 2. Inheritance

Inheritance allows objects to inherit properties and methods from other objects. In JavaScript, this is achieved through prototype chains, where objects can inherit from other objects using the `prototype` property.

```javascript
// Inheritance in JavaScript
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

// Child constructor function inheriting from Vehicle
function Car(make, model, year) {
    Vehicle.call(this, make, model);
    this.year = year;
}

// Inhertit from Vehicle Prototype using Object Create
Car.prototype = Object.create(Vehicle.prototype);

// Set the constructor back to student
Car.prototype.constructor = Car;

const myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry
console.log(myCar.year); // Output: 2020
```

In this example, `Car` inherits properties from the `Vehicle` constructor function.

### 3. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. This is achieved by using shared interfaces and methods.

```javascript
// Polymorphism in JavaScript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    throw new Error('Subclasses must implement the speak method');
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function () {
    return `${this.name} says Woof!`;
}

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.speak = function () {
    return `${this.name} says Meow!`;
}

const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');

console.log(myDog.speak()); // Output: Buddy says Woof!
console.log(myCat.speak()); // Output: Whiskers says Meow!
```

In this example, `speak` is a polymorphic method implemented differently in `Dog` and `Cat` subclasses.

### 4. Abstraction

Abstraction involves defining the essential properties and behaviors of an object while hiding unnecessary details. It simplifies complex systems by breaking them into manageable components.

```javascript
// Abstraction in JavaScript
function Shape() {
    this.draw = function () {
        throw new Error('Abstract method');
    }
}

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
    this.draw = function () {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

const circle = new Circle(5);
circle.draw(); // Output: Drawing a circle with radius 5
```

In this example, `Shape` is an abstract class with an abstract method `draw`, and `Circle` is a concrete subclass implementing the `draw` method.

## Conclusion

Even in older versions of JavaScript, you can implement OOP principles such as encapsulation, inheritance, polymorphism, and abstraction using constructor functions and prototypes. Understanding these concepts is crucial for organizing and structuring code in a more object-oriented manner.