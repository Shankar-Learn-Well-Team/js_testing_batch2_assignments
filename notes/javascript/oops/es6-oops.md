# Object-Oriented Programming (OOP) in JavaScript with ES6 Classes

ES6 introduced a simplified way to implement object-oriented programming (OOP) in JavaScript using classes. Classes provide a more structured and intuitive way to create objects, define properties and methods, and implement OOP principles. This guide will cover class creation, inheritance, encapsulation, polymorphism, and abstraction using ES6 classes.

## Creating Classes in ES6

In ES6, you can create classes using the `class` keyword. A class defines a blueprint for creating objects with shared characteristics.

```javascript
// Class for creating Person objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`,
        );
    }
}

// Creating instances of the Person class
const john = new Person('John', 30);
const alice = new Person('Alice', 25);

john.sayHello(); // Output: Hello, my name is John and I'm 30 years old.
alice.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old.
```

In this example, `Person` is an ES6 class used to create instances of the `Person` class with `name` and `age` properties.

## OOP Principles

### 1. Encapsulation

Encapsulation involves bundling data (properties) and methods (functions) that operate on that data within a class. ES6 classes provide built-in support for encapsulation using constructor methods, instance variables, and instance methods.

```javascript
// Encapsulation in ES6
class Circle {
    constructor(radius) {
        this._radius = radius; // Private property convention
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius >= 0) {
            this._radius = newRadius;
        }
    }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
myCircle.radius = 10;
console.log(myCircle.radius); // Output: 10
```

In this example, `_radius` is a convention for private properties, and `get` and `set` methods provide encapsulation.

### 2. Inheritance

Inheritance in ES6 allows you to create subclasses that inherit properties and methods from a superclass. The `extends` keyword is used to establish inheritance relationships.

```javascript
// Inheritance in ES6
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry
console.log(myCar.year); // Output: 2020
```

In this example, `Car` is a subclass that inherits properties from the `Vehicle` superclass.

### 3. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. ES6 supports polymorphism by implementing methods with the same name in different classes.

```javascript
// Polymorphism in ES6
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        throw new Error('Subclasses must implement the speak method');
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} says Woof!`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} says Meow!`;
    }
}

const myDog = new Dog('Buddy');
const myCat = new Cat('Whiskers');

console.log(myDog.speak()); // Output: Buddy says Woof!
console.log(myCat.speak()); // Output: Whiskers says Meow!
```

In this example, `speak` is a polymorphic method implemented differently in `Dog` and `Cat` subclasses.

### 4. Abstraction

Abstraction involves defining the essential properties and behaviors of an object while hiding unnecessary details. ES6 classes support abstraction by allowing you to declare methods without providing implementations.

```javascript
// Abstraction in ES6
class Shape {
    draw() {
        throw new Error('Abstract method');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

const circle = new Circle(5);
circle.draw(); // Output: Drawing a circle with radius 5
```

In this example, `Shape` is an abstract class with an abstract method `draw`, and `Circle` is a concrete subclass implementing the `draw` method.

## Conclusion

ES6 classes provide a more structured and intuitive way to implement object-oriented programming in JavaScript. With support for encapsulation, inheritance, polymorphism, and abstraction, ES6 classes make it easier to organize and structure code in an object-oriented manner.
