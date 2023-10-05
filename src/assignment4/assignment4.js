// 12. **Add Entry to Map:**

//     -   **Use-case:** Add a new word and its meaning to the dictionary map.
//         -   **Sample Inputs:** `{ 'apple': 'a fruit' }`, `'banana', 'a tropical fruit'`
//         -   **Sample Output:** Map with additional entry `{ 'banana': 'a tropical fruit' }`
//         -   **Operation:** Map manipulation.

const myMap = new Map([
  ['apple', 'a fruit']
]);

// Add another entry to the Map
myMap.set('banana', 'a tropical fruit');

// Now, the Map contains both entries
console.log(myMap);
