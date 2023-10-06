// Sum Calculator
// Task 01 : Write a function that performs a mathematical operation (e.g., addition, subtraction, multiplication) based on user input. Utilize both scope and closure to store operation history.  

function sumCalculator() {
    let history =[];
  
    function add(num1, num2) {
      const result = num1 + num2;
      history.push(`Result of addition: ${result}`);
      return result;
    }
  
    function getHistory() {
      return history;
    }
  
    return {
      add,
      history: getHistory,
    };
  }
  
  const calculate = sumCalculator();
  
  const result = calculate.add(5, 3);
  
  const operationHistory = calculate.history();
  console.log(operationHistory); // Output: ["Result of addition: 8"]
  
