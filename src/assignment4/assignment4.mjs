// 19. **Remove from Set:**

//     -   **Use-case:** Remove an element from the set.
//         -   **Sample Inputs:** `{ 3, 5, 7, 12 }`, `7`
//         -   **Sample Output:** Set like `{ 3, 5, 12 }`
//         -   **Operation:** Set deletion.


const mySet = new Set([3 , 5, 7, 12]);
console.log(mySet);  

mySet.delete(7);   //Remove element (7) from set

console.log(mySet);

