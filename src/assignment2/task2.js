/**
 * String Comparison
 * @param {string} input string
 * @returns string which is reversed
 */
function reverseString(input) {
    if (input.length <= 1) {
        return input;
    }
    return input[input.length - 1] + reverseString(input.slice(0, -1));
}

/**
 * Calculator
 * @returns result
 */
function calculator() {
    const history = [];
    function performOperation(operator, num1, num2) {
        let result;

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else {
            console.log('Invalid operator');
            return;
        }

        // Store the operation in history
        history.push(`${num1} ${operator} ${num2} = ${result}`);
        return result;
    }

    // Function to display operation history
    function showHistory() {
        console.log('Operation History:');
        history.forEach((operation, index) => {
            console.log(`${index + 1}. ${operation}`);
        });
    }

    return {
        add: (num1, num2) => performOperation('+', num1, num2),
        subtract: (num1, num2) => performOperation('-', num1, num2),
        multiply: (num1, num2) => performOperation('*', num1, num2),
        getHistory: showHistory,
    };
}

/**
 * Generates a series of prime numbers up to a given count using the Sieve of Eratosthenes algorithm.
 * @param {number} count - The number of prime numbers to generate.
 * @returns {Array} - An array containing the generated prime numbers.
 */
function generatePrimeSeries(count) {
    const primeSeries = [];
    const isNumberPrime = Array(count).fill(true);

    for (let i = 2; i * i < count; i++) {
        if (isNumberPrime[i]) {
            for (let j = i * i; j < count; j += i) {
                isNumberPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < count; i++) {
        if (isNumberPrime[i]) {
            primeSeries.push(i);
        }
    }

    return primeSeries;
}
