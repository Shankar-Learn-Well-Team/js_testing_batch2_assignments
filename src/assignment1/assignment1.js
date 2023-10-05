//Task 1: Write a function declaration that calculates the square of a number.
const squareofnumber = function (num) {
    return num * num;
  }
  const result = squareofnumber(7);
  console.log(result); // Output: 49
  
  //Task 2: Write a function expression that converts a string to uppercase.
  const convertToUppercase = function (string) {
    return string.toUpperCase();
  };
  
  const inputString = "Hello, I am Rohan";
  const uppercaseString = convertToUppercase(inputString);
  console.log(uppercaseString); // Output: "HELLO, I AM ROHAN"