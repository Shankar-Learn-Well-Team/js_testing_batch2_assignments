# Test Control and Execution

In Jest, you have several options for controlling and executing tests to fit your testing needs. You can focus on specific tests, skip tests, or filter tests based on patterns. Here's how you can do it:

### Focusing Tests

You can run only specific tests by using `.only`. This is helpful when you want to concentrate on particular tests during development or debugging.

Example:

```javascript
// mytests.js
describe('Test suite', () => {
    it('Test 1', () => {
        // Test logic here
    });

    it.only('Focused Test 2', () => {
        // Test logic here
    });

    it('Test 3', () => {
        // Test logic here
    });
});
```

In this example, only "Focused Test 2" will be executed.

### Skipping Tests

If you want to temporarily skip tests, you can use `.skip`. Skipped tests are not executed, which can be useful when you need to disable tests without removing them from the code.

Example:

```javascript
// mytests.js
describe('Test suite', () => {
    it('Test 1', () => {
        // Test logic here
    });

    it.skip('Skipped Test 2', () => {
        // Test logic here
    });

    it('Test 3', () => {
        // Test logic here
    });
});
```

In this example, "Skipped Test 2" will not be executed.

### Test Filtering

You can run specific tests using regex patterns with the `-t` option when executing tests with `npm test`.

Example:

```shell
npm test -- -t "pattern"
```

The `-t` option allows you to execute tests that match the specified pattern.
