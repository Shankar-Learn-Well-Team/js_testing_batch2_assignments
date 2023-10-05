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
___________________________________________________

function stringFilter(array, criterion) {
    const filteredArray = [];
    function filterByCriterion() {
      for (const item of array) {
        if (criterion(item)) {
          filteredArray.push(item);
        }
      }
    }
    filterByCriterion();
  
    return filteredArray;
  }
  const inputArray = ["apple", "banana", "kiwi", "strawberry"];
  const criterionFunction = function (str) {
    return str.length > 6;
  };
  const filteredResult = stringFilter(inputArray, criterionFunction);
  console.log("Filtered array:", filteredResult);
  