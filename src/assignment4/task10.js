const fruits = ['apple', 'banana', 'orange'];

const capitalizedFruits = fruits.map(fruit => {
  
  return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});

console.log(capitalizedFruits);
