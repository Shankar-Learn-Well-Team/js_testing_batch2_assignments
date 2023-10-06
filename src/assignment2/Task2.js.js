// 2. String Reversal
// **Task 02 => **: Create a function that reverses a string using recursion. Demonstrate how function hoisting works with this recursive function.

  function reverseString(input) {
    if (input === "") {
      return "";
    } else {
      return reverseString(input.substr(1)) + input.charAt(0);
    }
  }
  
  const reversedString = reverseString("Hello, World!");
  console.log("Reversed string:", reversedString); // Output: "!dlroW ,olleH"
  

