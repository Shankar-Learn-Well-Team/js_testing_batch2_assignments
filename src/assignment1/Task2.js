//////Program 2 assignment 1//////////

function findMax(number) {
    if (number.length === 0) {
      return undefined; 
    }
  
    let maximum = number[0]; 
  
    for (let i = 1; i < number.length; i++) {
      if (number[i] > maximum) {
        maximum = number[i]; 
      }
    }
    return maximum;
  }
console.log(findMax(array));


