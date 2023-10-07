const inputArray = ['Apple', 'Banana', 'Orange', 'Apricot'];

function filterFruitsStartingWithA(fruits) {
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith('a'));

    return filteredFruits;
}

const filteredFruits = filterFruitsStartingWithA(inputArray);

console.log(filteredFruits);