
////Program 1 assignment 2//////////

function reverseStringRecursive(inputString) {
  if (inputString === "") {
    return "";
  } else {
    return reverseStringRecursive(inputString.substr(1)) + inputString.charAt(0);
  }
}

const input = "Hello, World!";
const reversed = reverseStringRecursive(input);

console.log("Input string:", input);
console.log("Reversed string:", reversed);
