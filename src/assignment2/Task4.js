// Function declaration
function reverseString(input) {
    // Base case: if the string is empty or has only one character, return it as is
    if (input.length <= 1) {
      return input;
    }
  
    // Recursive case: reverse the rest of the string and concatenate the first character at the end
    return reverseString(input.slice(1)) + input[0];
  }
  
  // Demonstration of function hoisting
  console.log(reverseString("Hello, World!")); // "!dlroW ,olleH"
  