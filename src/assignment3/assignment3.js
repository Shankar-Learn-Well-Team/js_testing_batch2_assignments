// 6. **isPrime:**

//     - **Use-case:** Checks if a number is a prime number.
//     - **Sample Inputs:** (7)
//     - **Sample Output:** True
//     - **Constraints:** Works only for positive integers.
//     - **Operation:** A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(number) {
    if (number <= 1) {
        return false;  // 1 and any non-positive number are not prime
    }

    
    for (let i = number-1; i > 1; i--) {
        if (number % i === 0) {
            return "Not Prime";  // Found a factor, not a prime number
        }
    }
    
    return "Prime";  // No factors found, it's a prime number
}

//Random interger generation from 1 to 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
//const randomNumber = 13;
console.log("Number is:",randomNumber)
// Check if the number is prime
const result = isPrime(randomNumber);
console.log(result);  
