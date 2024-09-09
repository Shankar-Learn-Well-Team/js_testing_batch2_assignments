# Collections in JavaScript: Map and Set

## Introduction to Collections

Collections are data structures for storing and managing multiple values or items.

## Map

-   **Reference Link: [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**
-   A Map is a collection of key-value pairs.
-   It allows you to store data with unique keys.
-   Use a Map when you need to associate values with specific keys.

```javascript
const myMap = new Map();
```

#### Adding data to the Map

```javascript
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
```

#### Accessing data from the Map

```javascript
console.log(myMap.get('name')); // Output: John
```

#### Iterating over the Map

```javascript
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

#### Mutating data in the Map

```javascript
myMap.set('age', 31); // Updating the age
```

#### Deleting data from the Map

```javascript
myMap.delete('city');
```

#### Clearing the Map

```javascript
myMap.clear();
```

#### Other Map Methods and Operations

-   **Size of the Map:**

    ```javascript
    console.log(myMap.size); // Returns the number of key-value pairs in the Map
    ```

-   **Checking if a key exists:**

    ```javascript
    console.log(myMap.has('name')); // Returns true if the key 'name' exists in the Map
    ```

-   **Getting all keys and values:**

    ```javascript
    const keys = Array.from(myMap.keys()); // Get all keys as an array
    const values = Array.from(myMap.values()); // Get all values as an array
    ```

-   **Converting Map to Array of Arrays:**

    ```javascript
    const arrayOfKeyValuePairs = Array.from(myMap.entries()); // Converts the Map to an array of key-value pairs
    ```

## Set

-   **Reference Link: [MDN Web Docs - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**
-   A Set is a collection of unique values.
-   It does not allow duplicate entries.
-   Use a Set when you need to maintain a list of unique items.

```javascript
const mySet = new Set();
```

#### Adding data to the Set

```javascript
mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');
```

#### Accessing data from the Set

```javascript
console.log(mySet.has('banana')); // Output: true
```

#### Iterating over the Set

```javascript
mySet.forEach((value) => {
    console.log(value);
});
```

#### Mutating data in the Set (No direct update, need to remove and add again)

```javascript
mySet.delete('apple'); // Removing 'apple'
mySet.add('date'); // Adding 'date'
```

#### Clearing the Set

```javascript
mySet.clear();
```

#### Other Set Methods and Operations

-   **Size of the Set:**

    ```javascript
    console.log(mySet.size); // Returns the number of elements in the Set
    ```

-   **Checking if an element exists:**

    ```javascript
    console.log(mySet.has('banana')); // Returns true if 'banana' exists in the Set
    ```

-   **Converting Set to Array:**

    ```javascript
    const arrayFromSet = Array.from(mySet); // Converts the Set to an array
    ```

-   **Set Intersection, Difference, and Union:**

    Set operations can be performed using JavaScript functions. For example, to find the intersection, difference, or union of two sets, you can use custom functions:

    ```javascript
    function intersection(setA, setB) {
        return new Set([...setA].filter((x) => setB.has(x)));
    }

    function difference(setA, setB) {
        return new Set([...setA].filter((x) => !setB.has(x)));
    }

    function union(setA, setB) {
        return new Set([...setA, ...setB]);
    }
    ```
