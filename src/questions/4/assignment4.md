# JavaScript Assignment 4 - Objects, Arrays, Map and Sets

## Objects:

1. **Create an Object:**

    - **Use-case:** Design an object representing a car with properties like make, model, and year.
        - **Sample Inputs:** N/A
        - **Sample Output:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
        - **Operation:** Object, properties.

2. **Update Object Property:**

    - **Use-case:** Change the model property of the car object to a new value.
        - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
        - **Sample Output:** `{ make: 'Toyota', model: 'Corolla', year: 2022 }`
        - **Operation:** Object property update.

3. **Object Iteration:**

    - **Use-case:** Write a function to iterate through the properties of the car object and log them.
        - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
        - **Sample Output:** Logs each property value.
        - **Operation:** Object iteration.

4. **Object Destructuring:**

    - **Use-case:** Use object destructuring to extract the make and year from the car object.
        - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
        - **Sample Output:** `{ make: 'Toyota', year: 2022 }`
        - **Operation:** Object destructuring.

5. **Object Method:**
    - **Use-case:** Add a method to the car object that calculates the age of the car based on the current year.
        - **Sample Inputs:** `{ make: 'Toyota', model: 'Camry', year: 2022 }`
        - **Sample Output:** `2` (assuming the current year is 2024)
        - **Operation:** Object method.

## Arrays:

6. **Create an Array:**

    - **Use-case:** Design an array with the names of your favorite fruits.
        - **Sample Inputs:** N/A
        - **Sample Output:** `['Apple', 'Banana', 'Orange']`
        - **Operation:** Array creation.

7. **Add to Array:**

    - **Use-case:** Add a new fruit to the end of the array.
        - **Sample Inputs:** `['Apple', 'Banana', 'Orange']`
        - **Sample Output:** `['Apple', 'Banana', 'Orange', 'Mango']`
        - **Operation:** Array manipulation.

8. **Array Iteration:**

    - **Use-case:** Write a function to iterate through the array and log each fruit.
        - **Sample Inputs:** `['Apple', 'Banana', 'Orange']`
        - **Sample Output:** Logs each fruit.
        - **Operation:** Array iteration.

9. **Array Filtering:**

    - **Use-case:** Create a new array containing only fruits that start with the letter 'a'.
        - **Sample Inputs:** `['Apple', 'Banana', 'Orange']`
        - **Sample Output:** `['Apple']`
        - **Operation:** Array filtering.

10. **Array Mapping:**
    - **Use-case:** Create a new array with each fruit name capitalized.
    - **Sample Inputs:** `['apple', 'banana', 'orange']`
    - **Sample Output:** `['Apple', 'Banana', 'Orange']`
    - **Operation:** Array mapping.

## Map:

11. **Create a Dictionary Map:**

    -   **Use-case:** Design a Map representing a dictionary with words as keys and their meanings as values.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Map with entries like `{ 'apple': 'a fruit', 'book': 'a written work' }`
        -   **Operation:** Map creation.

12. **Add Entry to Map:**

    -   **Use-case:** Add a new word and its meaning to the dictionary map.
        -   **Sample Inputs:** `{ 'apple': 'a fruit' }`, `'banana', 'a tropical fruit'`
        -   **Sample Output:** Map with additional entry `{ 'banana': 'a tropical fruit' }`
        -   **Operation:** Map manipulation.

13. **Map Iteration:**

    -   **Use-case:** Write a function to iterate through the map and log each word and its meaning.
        -   **Sample Inputs:** `{ 'apple': 'a fruit', 'banana': 'a tropical fruit' }`
        -   **Sample Output:** Logs each entry.
        -   **Operation:** Map iteration.

14. **Remove Entry from Map:**

    -   **Use-case:** Remove a word and its meaning from the dictionary map.
        -   **Sample Inputs:** `{ 'apple': 'a fruit', 'banana': 'a tropical fruit' }`, `'banana'`
        -   **Sample Output:** Map without the entry for 'banana'.
        -   **Operation:** Map deletion.

15. **Clear Entries from Map:**
    -   **Use-case:** Clear all entries from the dictionary map.
        -   **Sample Inputs:** `{ 'apple': 'a fruit', 'banana': 'a tropical fruit' }`
        -   **Sample Output:** Empty map.
        -   **Operation:** Map clearing.

## Set:

16. **Create a Unique Numbers Set:**

    -   **Use-case:** Design a Set with a few unique numbers.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Set like `{ 3, 7, 12 }`
        -   **Operation:** Set creation.

17. **Add to Set:**

    -   **Use-case:** Add a new unique number to the set.
        -   **Sample Inputs:** `{ 3, 7, 12 }`, `5`
        -   **Sample Output:** Set like `{ 3, 5, 7, 12 }`
        -   **Operation:** Set manipulation.

18. **Set Iteration:**

    -   **Use-case:** Write a function to iterate through the set and log each unique number.
        -   **Sample Inputs:** `{ 3, 5, 7, 12 }`
        -   **Sample Output:** Logs each number.
        -   **Operation:** Set iteration.

19. **Remove from Set:**

    -   **Use-case:** Remove an element from the set.
        -   **Sample Inputs:** `{ 3, 5, 7, 12 }`, `7`
        -   **Sample Output:** Set like `{ 3, 5, 12 }`
        -   **Operation:** Set deletion.

20. **Clear Set:**
    -   **Use-case:** Clear all elements from the set.
        -   **Sample Inputs:** `{ 3, 5, 12 }`
        -   **Sample Output:** Empty set.
        -   **Operation:** Set clearing.

## Combined:

21. **Array of Objects:**
    -   **Use-case:** Create an array of objects, each representing a student with properties like name and grade.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** `[ { name: 'Alice', grade:

'A' }, { name: 'Bob', grade: 'B' }, ... ]` - **Operation:** Array of objects.

22. **Object with Arrays:**

    -   **Use-case:** Create an object representing a recipe with properties like ingredients (array), and instructions.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** `{ ingredients: ['flour', 'sugar', 'eggs'], instructions: 'Mix and bake.' }`
        -   **Operation:** Object with arrays.

23. **Map with Objects:**

    -   **Use-case:** Create a Map where keys are country names, and values are objects representing information about the country (population, capital).
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Map like `{ 'USA': { population: 331 million, capital: 'Washington, D.C.' }, ... }`
        -   **Operation:** Map with objects.

24. **Set of Arrays:**

    -   **Use-case:** Create a Set with arrays representing different sets of colors.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Set like `{ ['red', 'green'], ['blue', 'yellow'], ... }`
        -   **Operation:** Set of arrays.

25. **Array of Maps:**

    -   **Use-case:** Create an array of Maps, each representing a book with properties like title and author.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** `[ { title: 'The Hobbit', author: 'J.R.R. Tolkien' }, ... ]`
        -   **Operation:** Array of Maps.

26. **Array of Sets:**

    -   **Use-case:** Create an array of Sets, each representing a collection of unique hobbies.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** `[ { 'reading', 'gardening' }, { 'painting', 'cooking' }, ... ]`
        -   **Operation:** Array of Sets.

27. **Map of Arrays:**

    -   **Use-case:** Create a Map where keys are genres, and values are arrays of movies in that genre.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Map like `{ 'action': ['Die Hard', 'Terminator'], 'comedy': ['Anchorman', 'Superbad'], ... }`
        -   **Operation:** Map of arrays.

28. **Map of Sets:**

    -   **Use-case:** Create a Map where keys are project names, and values are Sets of team members working on those projects.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Map like `{ 'Project A': { 'Alice', 'Bob' }, 'Project B': { 'Charlie', 'Diana' }, ... }`
        -   **Operation:** Map of Sets.

29. **Set of Objects:**

    -   **Use-case:** Create a Set with objects representing different animals with properties like species and habitat.
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Set like `{ { species: 'Tiger', habitat: 'Jungle' }, { species: 'Penguin', habitat: 'Antarctica' }, ... }`
        -   **Operation:** Set of objects.

30. **Set of Maps:**
    -   **Use-case:** Create a Set with Maps representing different planets, where each Map has information about the planet (size, distance from the sun).
        -   **Sample Inputs:** N/A
        -   **Sample Output:** Set like `{ { 'Earth': { size: 'Medium', distance: '93 million miles' } }, { 'Mars': { size: 'Small', distance: '142 million miles' } }, ... }`
        -   **Operation:** Set of Maps.
