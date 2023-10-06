1// Write a function that performs a mathematical operation (e.g., addition, subtraction, multiplication) based on user input. 
// Utilize both scope and closure to store operation history.
// -   **Demonstrate using**: Scope, Closure
// -   **Input**: User selects addition and enters numbers 5 and 3.
// -   **Output**: Result of addition: 8

function createCalculator() {

    let globalvar = "Outer function variable";
  
    function operation(operation, num1, num2) {
      let result;
      if (operation === 'addition') {
        result = num1 + num2;
      } else if (operation === 'subtraction') {
        result = num1 - num2;
      } else if (operation === 'multiplication') {
        result = num1 * num2;
      } else {
        return 'Invalid operation';
      }
      
      return `Result of ${operation}: ${result} & globalvar: ${globalvar}`;
    }
  
    
    return {
      operation
    };
  }


let res = createCalculator();
console.log(res);
let operator='addition';
let num1 = 5;
let num2 = 5;
let sum = res.operation(operator,num1,num2);
console.log(sum);
