  // 6. String Manipulation

// -   **Task**: Create a program that takes a string as input and performs various manipulations on it (e.g., count vowels, reverse words). Use a combination of scope and closures to store intermediate results.
// -   **Demonstrate using**: Scope, Closure, String Manipulation
// -   **Input**: Input string: "Hello, World!"
// -   **Output**: Reversed string: "!dlroW ,olleH"
console.log("****************Task1****************")
function stringOperation(inputString) {
    const intermediateResults = [];
    const words = inputString.split(/\s+/);
    function reverseWord(word) {
        return word.split('').reverse().join('');
    }

    function countVowels(word) {
        const vowels = 'AEIOUaeiou';
        let count = 0;
        for (const char of word) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    words.forEach((word) => {
        const reversedWord = reverseWord(word);
        const vowelCount = countVowels(word);

        function storeResult() {
            intermediateResults.push({
                word,
                reversedWord,
                vowelCount
            });
        }
        storeResult();
    });

    function displayResults() {
        intermediateResults.forEach((result) => {
            console.log(`Word: ${result.word}, Reversed: ${result.reversedWord}, Vowel Count: ${result.vowelCount}`);
        });
    }
    return displayResults;
}

const input = "Hello, World!";
const display = stringOperation(input);
display();
