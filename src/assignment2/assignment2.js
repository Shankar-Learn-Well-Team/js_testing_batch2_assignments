// ### 7. Data Processing

// -   **Task**: Implement a function that processes an array of objects, 
// filters them based on specific criteria, and then performs calculations on the filtered data. 
// Utilize hoisting and closures to optimize the processing logic.

function processArrayWithFilterAndTotalPrice(data, filterCriteria, totalPrice) {
    // Initialize an empty array to store the filtered data
    var filteredData = [];

    // Loop through the data array and apply the filterCriteria
    for (var i = 0; i < data.length; i++) {
        // Check if the filterCriteria function returns true for the current object
        if (filterCriteria(data[i])) {
            // push the object to the filteredData array
            filteredData.push(data[i]);
        }
    }

    // Loop through the filteredData array and apply the totalPrice
    for (var i = 0; i < filteredData.length; i++) {
        // Use closure to access the result variable
        result += totalPrice(filteredData[i]);
    }
    return result;
}

// Using Hositing conecpt to Initialize a variable to store the result of the totalPrice
var result = 0;

// Example usage:

// Sample array of objects
var data = [
    { name: 'Kajukatli', price: 70 },
    { name: 'Gulabjamun', price: 60 },
    { name: 'Motichur', price: 30 },
];

// Filter by price greater than 50
function filterCriteria(obj) {
    return obj.price > 50;
}

// Total price function 
function totalPrice(obj) {
    return obj.price;
}

// Call the processArrayWithFilterAndTotalPrice function
var result = processArrayWithFilterAndTotalPrice(data, filterCriteria, totalPrice);
console.log(result); // Output: 130

// ### 4. Data Transformation

//**Task**: Develop an object constructor that represents a person with properties such as name, age, and city. 
//Create methods within the object that allow for updating these properties using the `this` keyword and closures.

function person(name, age, city) {
    // Properties
    this.name = name;
    this.age = age;
    this.city = city;

    // Method to update the name
    this.updateName = function (newName) {
        this.name = newName;
    };

    // Method to update the age
    this.updateAge = function (newAge) {
        this.age = newAge;
    };

    // Method to update the city
    this.updateCity = function (newCity) {
        this.city = newCity;
    };

    // Method to get the person's information
    this.getInfo = function () {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    };
}

// Create a person object
var person1 = new person("Alice", 30, "New York");

// Access and display the initial information
console.log("Initial Information:");
console.log(person1.getInfo());

// Update properties using the methods
person1.updateName("Bob");
person1.updateAge(25);
person1.updateCity("Los Angeles");

// Access and display the updated information
console.log("Updated Information:");
console.log(person1.getInfo());

// ### 2. String Reversal

// -   **Task**: Create a function that reverses a string using recursion. 
// Demonstrate how function hoisting works with this recursive function.

// Function declaration (hoisting applies)
function reverseStringRecursive(inputString) {
    // Base case: if the string is empty or has only one character, it's already reversed
    if (inputString.length <= 1) {
        return inputString;
    }

    // Recursive case: reverse the string excluding the first character,
    // and concatenate the first character at the end
    return reverseStringRecursive(inputString.slice(1)) + inputString[0];
}

// Example usage:
var originalString = "Hello, World!";
var reversedString = reverseStringRecursive(originalString);
console.log(reversedString);
