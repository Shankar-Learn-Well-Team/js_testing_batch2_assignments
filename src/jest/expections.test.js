// test whether the divide function throws an error when dividing by zero.

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

test('division by zero should throw an error', () => {
    expect(() => {
        divide(5, 0);
    }).toThrow('Division by zero');
});

// test if the throwError function throws any error, regardless of the error message.

function throwError() {
    throw new Error('This is an error');
}

test('should throw an error', () => {
    expect(throwError).toThrow();
});

// test an asynchronous function that is expected to reject with a specific error.
async function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation that throws an error
        setTimeout(() => {
            reject(new Error('Data retrieval failed'));
        }, 1000);
    });
}

test('async function should reject with an error', async () => {
    await expect(fetchData()).rejects.toThrow('Data retrieval failed');
});
