// const convertToUpperCase = function(inputString) {
//     return inputString.toUpperCase();
//   };
  
//   const originalString = "Excellent work Done by QA";
//   const uppercaseString = convertToUpperCase(originalString);
//   console.log(uppercaseString);

// ________________________________________________________________


//   function Reversestring(String) {
//   if (String === "") {
//     return "";
//   } else {
//     return Reversestring(String.substr(1)) +String.charAt(0);
//   }
// }
// const Input = "Excellent work done by QA";
// const Reversed = Reversestring(Input);

// console.log("I/P string:", Input);
// console.log("Reversed string:", Reversed);
// ___________________________________________________

// function stringFilter(array, criterion) {
//     const filteredArray = [];
//     // Encapsulate the filter logic within a closure
//     function filterByCriterion() {
//       for (const item of array) {
//         if (criterion(item)) {
//           filteredArray.push(item);
//         }
//       }
//     }
//     // Call the closure to perform the filtering
//     filterByCriterion();
  
//     return filteredArray;
//   }
//   // Example usage:
//   const inputArray = ["apple", "banana", "kiwi", "strawberry"];
//   // Define the criterion function (e.g., filtering by string length)
//   const criterionFunction = function (str) {
//     return str.length > 6;
//   };
//   // Use the stringFilter function to filter the array
//   const filteredResult = stringFilter(inputArray, criterionFunction);
//   console.log("Filtered array:", filteredResult); // Output: Filtered array: ["banana", "strawberry"]
  