# Mock Functions in Jest

Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

## Using a Mock Function

**jest.fn()**

jest.fn() is a utility function provided by the Jest testing framework for JavaScript. It is used to create mock functions or spy functions for testing. These mock functions allow you to observe and control the behavior of functions within your code during testing.

```javascript
const mockFunction = jest.fn();
```

Let's imagine we're testing an implementation of a function `forEach`, which invokes a callback for each item in a supplied array.

**forEach.js**

```javascript
export function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}
```

To test this function, we can use a mock function and inspect the mock's state to ensure the callback is invoked as expected.

**forEach.test.js**

```javascript
const forEach = require('./forEach');

const mockCallback = jest.fn((x) => 42 + x);

test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});
```

### .mock Property

All mock functions have this special `.mock` property, which is where data about how the function has been called and what the function returned is kept. The `.mock` property also tracks the value of `this` for each call.

```javascript
const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]
```

These mock members are useful in tests to assert how these functions are called, instantiated, or what they returned.

## Mock Return Values

Mock functions can also be used to inject test values into your code during a test.

```javascript
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
```

### Mocking Modules

Suppose we have a class that fetches users from our API. The class uses axios to call the API and returns the data attribute which contains all the users.

**users.js**

```javascript
import axios from 'axios';

class Users {
    static all() {
        return axios.get('/users.json').then((resp) => resp.data);
    }
}

export default Users;
```

To test this method without actually hitting the API, we can use the `jest.mock(...)` function to automatically mock the axios module.

**users.test.js**

```javascript
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users));
});
```

### Mocking Partials (Not Recommended)

Subsets of a module can be mocked while keeping the rest of the module's actual implementation.

### Mock Implementations

There are cases where you can replace the implementation of a mock function. This can be done with `jest.fn` or the `mockImplementationOnce` method on mock functions.

```javascript
const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true
```

The `mockImplementation` method is useful when you need to define the default implementation of a mock function created from another module.

```javascript
// foo.js
module.exports = function () {
    // some implementation;
};

// test.js
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42
```

When you need multiple function calls to produce different results, use the `mockImplementationOnce` method:

```javascript
const myMockFn = jest
    .fn()
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false
```

### Mock Names

You can provide a name for your mock functions to identify them in test error output.

```javascript
const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation((scalar) => 42 + scalar)
    .mockName('add42');
```

### Custom Matchers

Jest provides custom matcher functions to make it easier to assert how mock functions have been called.

```javascript
// The mock function was called at least once
expect(mockFunc).toHaveBeenCalled();

// The mock function was called at least once with the specified args
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

// The last call to the mock function was called with the specified args
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

// All calls and the name of the mock are written as a snapshot
expect(mockFunc).toMatchSnapshot();
```

These matchers are sugar for inspecting the `.mock` property, which can also be done manually.

Mock functions are a powerful tool for testing your code and making assertions about function calls and return values.

```

```
