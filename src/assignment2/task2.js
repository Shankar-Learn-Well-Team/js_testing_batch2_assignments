2.// Task**: Build a program that analyzes a string to determine its properties (e.g., palindrome, anagram). Use scope and closures 
// to store intermediate analysis results.
// -   **Demonstrate using**: Scope, Closure, String Analysis
// -   **Input**: Input string: "racecar"
// -   **Output**: Palindrome: Yes

function analyzer(inputString) {
    // Helper function to check if a string is a palindrome
    function isPalindrome(str) {
      return str === str.split('').reverse().join('');
    }
  
    // Check if the input string is a palindrome
    const isPal = isPalindrome(inputString);
  
    // Return a closure that can access the result
    return function () {
      if (isPal) {
        return "Palindrome: Yes";
      } else {
        return "Palindrome: No";
      }
    };
  }
  
  // Input string
  const inputString = "racecar";
  
  // Analyze the input string
  const analyze = analyzer(inputString);
  
  // Call the closure to get the result
  console.log(analyze());
