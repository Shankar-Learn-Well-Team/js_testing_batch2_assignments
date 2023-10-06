// 8. **Array Iteration:**

//     - **Use-case:** Write a function to iterate through the array and log each fruit.
//         - **Sample Inputs:** `['Apple', 'Banana', 'Orange']`
//         - **Sample Output:** Logs each fruit.
//         - **Operation:** Array iteration.





function logFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

const fruits = ['Apple', 'Banana', 'Orange'];

logFruits(fruits);