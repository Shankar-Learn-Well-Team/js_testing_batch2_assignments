# Prototypal Methods

## String Prototype Methods

### 1. `charAt(index)`

Returns the character at the specified index.

```javascript
const str = 'Hello, World!';
const char = str.charAt(7); // Expected output: 'W'
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

### 2. `charCodeAt(index)`

Returns the Unicode value of the character at the specified index.

```javascript
const unicodeValue = str.charCodeAt(7); // Expected output: 87
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

### 3. `concat(str1, str2, ...)`

Combines one or more strings and returns a new string.

```javascript
const str1 = 'Hello,';
const str2 = ' World';
const combinedStr = str1.concat(str2); // Expected output: "Hello, World"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

### 4. `indexOf(searchValue, fromIndex)`

Returns the index of the first occurrence of a specified value.

```javascript
const index = str.indexOf('is'); // Expected output: 2
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

### 5. `toUpperCase()`

Converts the string to uppercase.

```javascript
const uppercaseStr = str.toUpperCase(); // Expected output: "HELLO, WORLD!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

### 6. `trim()`

Removes leading and trailing whitespace.

```javascript
const trimmedStr = str.trim(); // Expected output: "Hello, World!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

### 7. `slice(start, end)`

Returns a section of the string.

```javascript
const slicedStr = str.slice(7, 12); // Expected output: "World"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

### 8. `substring(start, end)`

Returns a subset of the string.

```javascript
const subStr = str.substring(7, 12); // Expected output: "World"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

### 9. `substr(start, length)`

Returns a portion of the string starting at the specified index.

```javascript
const subStr = str.substr(7, 5); // Expected output: "World"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

### 10. `startsWith(searchString, position)`

Checks if the string starts with a specified substring.

```javascript
const startsWithHello = str.startsWith('Hello'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

### 11. `endsWith(searchString, position)`

Checks if the string ends with a specified substring.

```javascript
const endsWithWorld = str.endsWith('World!'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

### 12. `includes(searchString, position)`

Checks if the string contains a specified substring.

```javascript
const containsWorld = str.includes('World'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

### 13. `replace(searchValue, replaceValue)`

Replaces a specified value with another value in the string.

```javascript
const replacedStr = str.replace('World', 'Universe'); // Expected output: "Hello, Universe!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

### 14. `split(separator, limit)`

Splits the string into an array of substrings.

```javascript
const words = str.split(' '); // Expected output: ["Hello,", "World!"]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### 15. `repeat(count)`

Returns a new string with a specified number of copies.

```javascript
const repeatedStr = 'abc'.repeat(3); // Expected output: "abcabcabc"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

### 16. `startsWith(searchString, position)`

Checks if the string starts with a specified substring.

```javascript
const startsWithHello = str.startsWith('Hello'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

### 17. `endsWith(searchString, position)`

Checks if the string ends with a specified substring.

```javascript
const endsWithWorld = str.endsWith('World!'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

### 18. `toLocaleLowerCase([locales[, options]])`

Converts the string to lowercase based on the host's locale.

```javascript
const localeLowerCaseStr = str.toLocaleLowerCase('tr'); // Locale-specific lowercase string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)

### 19. `toLocaleUpperCase([locales[, options]])`

Converts the string to uppercase based on the host's locale.

```javascript
const localeUpperCaseStr = str.toLocaleUpperCase('tr'); // Locale-specific uppercase string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)

### 20. `trimStart()` and `trimEnd()`

Removes leading or trailing whitespace.

```javascript
const trimmedStartStr = '  Hello'.trimStart(); // Expected output: "Hello"
const trimmedEndStr = 'World!   '.trimEnd(); // Expected output: "World!"
```

[MDN Documentation (trimStart)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
[MDN Documentation (trimEnd)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)

## Number Prototype Methods

### 1. `toFixed(digits)`

Formats a number using fixed-point notation.

```javascript
const num = 3.14159;
const fixedNum = num.toFixed(2); // Expected output: "3.14"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

### 2. `toPrecision(precision)`

Formats a number to a specified precision.

```javascript
const precisionNum = num.toPrecision(4); // Expected output: "3.142"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)

### 3. `parseInt(radix)`

Parses a string and returns an integer.

```javascript
const numStr = '42';
const parsedNum = parseInt(numStr); // Expected output: 42
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

### 4. `parseFloat()`

Parses a string and returns a floating-point number.

```javascript
const floatStr = '3.14';
const parsedFloat = parseFloat(floatStr); // Expected output: 3.14
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

### 5. `isInteger()`

Checks if a number is an integer.

```javascript
const intNum = 42;
const isInteger = Number.isInteger(intNum); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

### 6. `isNaN()`

Checks if a value is NaN (Not-a-Number).

```javascript
const isNaNValue = isNaN('abc'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

### 7. `isFinite()`

Checks if a value is a finite number.

```javascript
const isFiniteValue = isFinite(42); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)

### 8. `toExponential(fractionDigits)`

Returns a string representing the number in exponential notation.

```javascript
const exponentialStr = num.toExponential(2); // Expected output: "3.14e+0"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)

### 9. `toLocaleString([locales[, options]])`

Returns a string with a language-sensitive representation of the number.

```javascript
const localeString = num.toLocaleString('de-DE'); // Locale-specific representation
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

### 10. `valueOf()`

Returns the primitive value of a Number object.

```javascript
const numValue = num.valueOf(); // Expected output: 3.14159
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf)

## Array Prototype Methods

### 1. `push(element)`

Adds an element to the end of an array.

```javascript
const arr = [1, 2, 3];
arr.push(4); // Array: [1, 2, 3, 4]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

### 2. `pop()`

Removes and returns the last element of an array.

```javascript
const poppedElement = arr.pop(); // Popped element: 4, Array: [1, 2, 3]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

### 3. `shift()`

Removes and returns the first element of an array.

```javascript
const shiftedElement = arr.shift(); // Shifted element: 1, Array: [2, 3]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

### 4. `unshift(element)`

Adds one or more elements to the beginning of an array.

```javascript
arr.unshift(0, -1); // Array: [-1, 0, 2, 3]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

### 5. `concat(arr1, arr2, ...)`

Combines two or more arrays and returns a new array.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = arr1.concat(arr2); // Expected output: [1, 2, 3, 4]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

### 6. `reverse()`

Reverses the order of elements in an array.

```javascript
arr.reverse(); // Reversed array: [3, 2, 0, -1]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

### 7. `sort(compareFunction)`

Sorts the elements of an array.

```javascript
const fruitBasket = ['banana', 'apple', 'cherry'];
fruitBasket.sort(); // Sorted array: ["apple", "banana", "cherry"]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### 8. `slice(start, end)`

Extracts a portion of an array and returns a new array.

```javascript
const slicedArr = fruitBasket.slice(1, 3); // Sliced array: ["banana", "cherry"]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### 9. `splice(start, deleteCount, item1, item2, ...)`

Changes the contents of an array by removing, replacing, or adding elements.

```javascript
fruitBasket.splice(1, 1, 'grape', 'kiwi'); // Modified array: ["apple", "grape", "kiwi", "cherry"]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### 10. `indexOf(searchElement, fromIndex)`

Returns the first index at which a specified element is found.

```javascript
const index = fruitBasket.indexOf('kiwi'); // Expected output: 2
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

### 11. `lastIndexOf(searchElement, fromIndex)`

Returns the last index at which a specified element is found.

```javascript
const lastIndex = fruitBasket.lastIndexOf('kiwi'); // Expected output: 2
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

### 12. `every(callback)`

Checks if all elements in an array pass a test.

```javascript
const allEven = numbers.every((num) => num % 2 === 0); // Expected output: false
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### 13. `some(callback)`

Checks if at least one element in an array passes a test.

```javascript
const hasEven = numbers.some((num) => num % 2 === 0); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### 14. `forEach(callback)`

Calls a function for each element in an array.

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => {
    console.log(num);
});
// Output:
// 1
// 2
// 3
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### 15. `map(callback)`

Creates a new array with the results of calling a function for each element.

```javascript
const doubledNumbers = numbers.map((num) => num * 2); // Expected output: [2, 4, 6]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### 16. `filter(callback)`

Creates a new array with elements that pass a test.

```javascript
const evenNumbers = numbers.filter((num) => num % 2 === 0); // Expected output: [2]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### 17. `reduce(callback, initialValue)`

Applies a function against an accumulator and each element in the array (from left to right).

```javascript
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Expected output: 6
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### 18. `reduceRight(callback, initialValue)`

Applies a function against an accumulator and each element in the array (from right to left).

```javascript
const concatStr = fruitBasket.reduceRight((acc, curr) => acc + ' ' + curr, ''); // Expected output: "cherry kiwi grape apple"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

### 19. `find(callback)`

Returns the first element in an array that satisfies a provided test function.

```javascript
const firstEven = numbers.find((num) => num % 2 === 0); // Expected output: 2
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### 20. `findIndex(callback)`

Returns the index of the first element in an array that satisfies a provided test function.

```javascript
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0); // Expected output: 1
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### 21. `fill(value, start, end)`

Changes all elements in an array to a static value.

```javascript
const filledArray = new Array(5).fill(0); // Array: [0, 0, 0, 0, 0]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

### 22. `includes(searchElement, fromIndex)`

Checks if an array contains a certain element.

```javascript
const includesElement = fruitBasket.includes('kiwi'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### 23. `flat(depth)`

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
const nestedArray = [1, [2, [3]]];
const flatArray = nestedArray.flat(2); // Expected output: [1, 2, 3]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

### 24. `flatMap(callback)`

First maps each element using a mapping function, then flattens the result into a new array.

```javascript
const flatMapped = numbers.flatMap((num) => [num * 2, num * 3]); // Expected output: [2, 3, 4, 6, 6, 9]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

## Object Prototype Methods

### 1. `hasOwnProperty(prop)`

Checks if an object has a specified property.

```javascript
const obj = { name: 'John', age: 30 };
const hasName = obj.hasOwnProperty('name'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

### 2. `propertyIsEnumerable(prop)`

Checks if a specified property is enumerable.

```javascript
const isEnumerable = obj.propertyIsEnumerable('age'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)

### 3. `isPrototypeOf(obj)`

Checks if an object is in the prototype chain of another object.

```javascript
function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
const isPrototype = Person.prototype.isPrototypeOf(person); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)

### 4. `toLocaleString([locales[, options]])`

Returns a string representing the object.

```javascript
const objString = obj.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
}); // Locale-specific object string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)

### 5. `toString()`

Returns a string representing the object.

```javascript
const objString = obj.toString(); // Expected output: "[object Object]"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

### 6. `valueOf()`

Returns the primitive value of the object.

```javascript
const objValue = obj.valueOf(); // The object itself
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)

## Boolean Prototype Methods

### 1. `toString()`

Converts a Boolean to a string representation.

```javascript
const bool = true;
const boolString = bool.toString(); // Expected output: "true"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString)

### 2. `valueOf()`

Returns the primitive value of a Boolean object.

```javascript
const boolValue = bool.valueOf(); // The boolean value itself
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)

## Date Prototype Methods

### 1. `getDate()`

Returns the day of the month (1-31).

```javascript
const date = new Date();
const day = date.getDate(); // Current day of the month
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)

### 2. `getDay()`

Returns the day of the week (0-6) where Sunday is 0 and Saturday is 6.

```javascript
const dayOfWeek = date.getDay(); // Current day of the week
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

### 3. `getFullYear()`

Returns the year (four digits) of the date.

```javascript
const year = date.getFullYear(); // Current year
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)

### 4. `getHours()`

Returns the hour (0-23) of the date.

```javascript
const hours = date.getHours(); // Current hour
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)

### 5. `getMilliseconds()`

Returns the milliseconds (0-999) of the date.

```javascript
const milliseconds = date.getMilliseconds(); // Current milliseconds
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)

### 6. `getMinutes()`

Returns the minutes (0-59) of the date.

```javascript
const minutes = date.getMinutes(); // Current minutes
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)

### 7. `getMonth()`

Returns the month (0-11) of the date.

```javascript
const month = date.getMonth(); // Current month
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)

### 8. `getSeconds()`

Returns the seconds (0-59) of the date.

```javascript
const seconds = date.getSeconds(); // Current seconds
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)

### 9. `getTime()`

Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```javascript
const timestamp = date.getTime(); // Current timestamp
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)

### 10. `toISOString()`

Returns a string representing the date in ISO format.

```javascript
const isoString = date.toISOString(); // ISO formatted date string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)

### 11. `toJSON()`

Returns a JSON representation of the date.

```javascript
const jsonDate = date.toJSON(); // JSON formatted date string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON)

### 12. `toLocaleDateString([locales[, options]])`

Returns a string with a language-sensitive representation of the date.

```javascript
const localeDateString = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}); // Locale-specific date string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

### 13. `toLocaleTimeString([locales[, options]])`

Returns a string with a language-sensitive representation of the time.

```javascript
const localeTimeString = date.toLocaleTimeString('de-DE'); // Locale-specific time string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)

### 14. `toLocaleString([locales[, options]])`

Returns a string with a language-sensitive representation of the date and time.

```javascript
const localeString = date.toLocaleString('ja-JP'); // Locale-specific date and time string
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)

### 15. `toString()`

Returns a string representation of the date.

```javascript
const dateString = date.toString(); // Expected output: "Sat Sep 02 2023 10:30:00 GMT+0000 (Coordinated Universal Time)"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)

### 16. `valueOf()`

Returns the primitive value of the date.

```javascript
const dateValue = date.valueOf(); // Timestamp value
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf)

## Function Prototype Methods

### 1. `apply(thisArg, argsArray)`

Calls a function with a given `this` value and arguments provided as an array.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

const result = greet.apply(null, ['Alice']); // Expected output: "Hello, Alice!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### 2. `call(thisArg, arg1, arg2, ...)`

Calls a function with a given `this` value and individual arguments.

```javascript
const result = greet.call(null, 'Bob'); // Expected output: "Hello, Bob!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### 3. `bind(thisArg, arg1, arg2, ...)`

Creates a new function with a given `this` value and arguments.

```javascript
const boundGreet = greet.bind(null, 'Charlie');
const result = boundGreet(); // Expected output: "Hello, Charlie!"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## RegExp Prototype Methods

### 1. `exec(str)`

Executes a search for a match in a specified string.

```javascript
const regex = /world/g;
const result = regex.exec('Hello, world! world!'); // Array of matches: ["world", "world"]
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

### 2. `test(str)`

Tests for a match in a specified string.

```javascript
const isMatch = regex.test('Hello, world!'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

## Map Prototype Methods

### 1. `set(key, value)`

Sets the value for a key in a Map object.

```javascript
const map = new Map();
map.set('name', 'John');
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

### 2. `get(key)`

Returns the value associated with a key in a Map object.

```javascript
const name = map.get('name'); // Expected output: "John"
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

### 3. `has(key)`

Checks if a key exists in a Map object.

```javascript
const hasName = map.has('name'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

### 4. `delete(key)`

Removes a key and its associated value from a Map object.

```javascript
map.delete('name');
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)

### 5. `clear()`

Removes all key-value pairs from a Map object.

```javascript
map.clear();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)

### 6. `keys()`

Returns an iterator of keys in a Map object.

```javascript
const keysIterator = map.keys();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)

### 7. `values()`

Returns an iterator of values in a Map object.

```javascript
const valuesIterator = map.values();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)

### 8. `entries()`

Returns an iterator of key-value pairs in a Map object.

```javascript
const entriesIterator = map.entries();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)

### 9. `forEach(callback)`

Calls a provided function once for each key-value pair in a Map object.

```javascript
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

## Set Prototype Methods

### 1. `add(value)`

Adds a new element with the specified value to a Set object.

```javascript
const set = new Set();
set.add('apple');
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

### 2. `has(value)`

Checks if a value exists in a Set object.

```javascript
const hasApple = set.has('apple'); // Expected output: true
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

### 3. `delete(value)`

Removes a specified value from a Set object.

```javascript
set.delete('apple');
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

### 4. `clear()`

Removes all elements from a Set object.

```javascript
set.clear();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

### 5. `values()`

Returns an iterator of values in a Set object.

```javascript
const valuesIterator = set.values();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

### 6. `entries()`

Returns an iterator of values in a Set object (values are also keys).

```javascript
const entriesIterator = set.entries();
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

### 7. `forEach(callback)`

Calls a provided function once for each value in a Set object.

```javascript
set.forEach((value) => {
    console.log(value);
});
```

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
