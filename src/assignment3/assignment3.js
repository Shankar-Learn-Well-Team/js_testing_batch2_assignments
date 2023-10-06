

function checkVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  char = char.toLowerCase(); 
  console.log(char);// Convert the character to lowercase for case-insensitive comparison
  return vowels.includes(char);
}

// Sample usage:

const result = checkVowel('a');
console.log(result); // Output will be true