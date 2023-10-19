
const assert = require('assert');

function testTruthy() {
    try {
        assert.ok(5 > 3, '5 is greater than 3'); // Passes
    } catch (error) {
        console.error(error.message);
    }
}

function testLooseEquality() {
    try {
        assert.equal(2, '2', 'Values are loosely equal'); // Passes
    } catch (error) {
        console.error(error.message);
    }
}

function testStrictEquality() {
    try {
        assert.strictEqual(2, '2', 'Values are not strictly equal'); // Fails
    } catch (error) {
        console.error(error.message);
    }
}

function testDeepEquality() {
    try {
        assert.deepEqual(
            { a: 1, b: 2 },
            { a: 2, b: 3 },
            'Objects are deeply equal',
        ); // Passes
    } catch (error) {
        console.error(error.message);
    }
}

function testThrows() {
    try {
        assert.throws(
            () => {
                throw new Error('Test error');
            },
            Error,
            'Function throws an error',
        ); // Passes
    } catch (error) {
        console.error(error.message);
    }
}

function testArrayLength() {
    try {
        const numbers = [1, 2, 3, 4, 5];
        assert.strictEqual(
            numbers.length,
            5,
            'Array length is not as expected',
        );
    } catch (error) {
        console.error(error.message);
    }
}

function testObjectProperties() {
    try {
        const person = { name: 'John', age: 30 };
        assert.deepEqual(
            person,
            { name: 'John', age: 30 },
            'Object properties do not match',
        );
    } catch (error) {
        console.error(error.message);
    }
}

function testCustomFunction() {
    try {
        function multiply(a, b) {
            return a * b;
        }
        assert.strictEqual(
            multiply(4, 5),
            21,
            'Multiplication result is incorrect',
        );
    } catch (error) {
        console.error(error.message);
    }
}

// Call tests
testTruthy();
testLooseEquality();
testStrictEquality();
testDeepEquality();
testThrows();
testArrayLength();
testObjectProperties();
testCustomFunction();

// The execution will continue to the next test even if there are assertion failures
assert.js
