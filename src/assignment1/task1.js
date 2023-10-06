/**
 * Counter Function with Closure.
 * Keeps track of how many times it has been called.
 * @returns {function} - The inner function that counts how many times it has been called.
 */
function counter() {
    let count = 0; // Initialize the count variable inside the outer function

    function inner() {
        count++; // Increment the count variable
        return count;
    }

    return inner; // Return the inner function, which captures the count variable
}

/**
 * Creates a counter function.
 * The inner function increments a counter variable and logs the updated value.
 * @returns {function} - The inner function that increments the counter.
 */
function createCounter() {
    let count = 0; // Variable captured by the closure
    function increment() {
        count++; // The inner function can access the 'count' variable
        console.log(count);
    }
    return increment;
}
