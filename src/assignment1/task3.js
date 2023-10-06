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

  

