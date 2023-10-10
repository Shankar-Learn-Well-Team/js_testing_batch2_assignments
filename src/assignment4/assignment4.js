
// Recipe object
const recipe = {
  name: 'Simple cake',
  ingredients: ['flour', 'sugar', 'eggs'],
  instructions: 'Mix all the 3 ingredients and bake for 25 minutes.',
};

// Example usage
console.log(`Recipe: ${recipe.name}`);

console.log('\nIngredients:');
recipe.ingredients.forEach((ingredient, index) => {
  console.log(`${index + 1}. ${ingredient}`);
});
console.log('\nInstructions:');
console.log(recipe.instructions);

