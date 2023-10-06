//  Assignment 4--  

// **Object Method:**
// - **Use-case:** Add a method to the car object that calculates the age of the car based on the current year.
// - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
// - **Sample Output:** `2` (assuming the current year is 2024)
// - **Operation:** Object method.

const input = { make: 'Toyota', model: 'Camry', year: 2022 };

function getAge(car) {

    const date = new Date();

    const currYear = date.getFullYear();

    const age = currYear - car.year;

    return age;

}

console.log("Age:", getAge(input));