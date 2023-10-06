function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
  
    return str.slice(-1) + reverseString(str.slice(0, -1));
  }
  
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  
  console.log("Reversed string:", reversedString);