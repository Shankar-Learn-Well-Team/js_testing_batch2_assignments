
////Program 2 assignment 2//////////

function filterStringsByCriterion(strings, criterion) {
  
  function filterLogic(string) {
    if (criterion === "+5") {
      return string.length > 5;
    } else if (criterion === "startsWithS") {
      return string.startsWith("s") || string.startsWith("S");
    } else {
     
      return true;
    }
  }


  return strings.filter(filterLogic);
}

const inputArray = ["apple", "banana", "kiwi", "strawberry"];


const filteredArray = filterStringsByCriterion(inputArray, "+5");
console.log("Filtered array:", filteredArray);



