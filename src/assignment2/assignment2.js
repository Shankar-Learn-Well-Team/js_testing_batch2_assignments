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

const inputString = "Hello, World!";
const display = stringOperation(inputString);
display();


// 20. Text Formatting

// -   **Task**: Create a program that formats text based on user-defined rules (e.g., capitalization, line breaks). Use hoisting and closures to manage text formatting functions.
// -   **Demonstrate using**: Hoisting, Closure, Text Formatting
// -   **Input**: Text content and formatting rules.
// -   **Output**: Formatted text.
console.log("****************Task2****************")
function textFormatter() {
    let text = '';
  
    function capitalize() {
      text = text.toUpperCase();
    }
  
    function lowercase() {
      text = text.toLowerCase();
    }
  
    function addLineBreak() {
      text = text.split('\n').join('<br>');
    }
  
    function applyRules(rules) {
      for (const rule of rules) {
        switch (rule) {
          case 'capitalize':
            capitalize();
            break;
          case 'lowercase':
            lowercase();
            break;
          case 'linebreak':
            addLineBreak();
            break;
          default:
            console.log(`Unknown rule: ${rule}`);
        }
      }
    }
  
    function format(inputText, rules) {
      text = inputText;
      applyRules(rules);
      return text;
    }
  
    return {
      format,
    };
  }
  

  const formatter = textFormatter();
  const inputText = 'Hi i am Pooja.\nI am learning javascript.';
  
  const formattedText = formatter.format(inputText, ['capitalize', 'linebreak']);
  console.log(formattedText);
  
  
// 1. Sum Calculator

// -   **Task**: Write a function that performs a mathematical operation (e.g., addition, subtraction, multiplication) based on user input. Utilize both scope and closure to store operation history.
// -   **Demonstrate using**: Scope, Closure
// -   **Input**: User selects addition and enters numbers 5 and 3.
// -   **Output**: Result of addition: 8
console.log("****************Task3****************")
  function createCalculator() {
    let history = [];
  
    function performOperation(operator, operand1, operand2) {
      let result;
      switch (operator) {
        case 'add':
          result = operand1 + operand2;
          break;
        case 'subtract':
          result = operand1 - operand2;
          break;
        case 'multiply':
          result = operand1 * operand2;
          break;
        default:
          return 'Invalid operator';
      }
  
      const operation = `${operand1} ${operator} ${operand2} = ${result}`;
      history.push(operation);
      return result;
    }
  
    function getHistory() {
      return history;
    }
  
    return {
      performOperation,
      getHistory,
    };
  }
  
 
  const calculator = createCalculator();
  console.log(calculator.performOperation('add', 5, 3)); // Output: 8
  console.log(calculator.performOperation('subtract', 5, 3)); // Output: 2
  console.log(calculator.performOperation('multiply', 5, 3)); // Output: 15

  console.log(calculator.getHistory());