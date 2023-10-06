// 11. ** Create a Dictionary Map:**

//     -   ** Use -case:** Design a Map representing a dictionary with words as keys and their meanings as values.
//         -   ** Sample Inputs:** N / A
//     -   ** Sample Output:** Map with entries like`{ 'apple': 'a fruit', 'book': 'a written work' }`
//         -   ** Operation:** Map creation.
// Create a new Map representing the dictionary
const dictionary = new Map();

// Add entries to the dictionary map
dictionary.set('apple', 'a fruit');
dictionary.set('book', 'a written work');
dictionary.set('car', 'a vehicle');
dictionary.set('dog', 'a animal');

// You can add more entries as needed

// Sample usage: Retrieve the meaning of a word
const wordToLookup = 'apple';
if (dictionary.has(wordToLookup)) {
    const meaning = dictionary.get(wordToLookup);
    console.log(`${wordToLookup}: ${meaning}`);
} else {
    console.log(`Word not found in the dictionary.`);
}

