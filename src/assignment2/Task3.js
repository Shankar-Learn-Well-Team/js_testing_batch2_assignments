function calculator() {
    // Initialize an empty array to store operation history
    const history = [];
  
    function performOperation(operation, num1, num2) {
      let result;
      switch (operation) {
        case 'addition':
          result = num1 + num2;
          break;
        case 'subtraction':
          result = num1 - num2;
          break;
        case 'multiplication':
          result = num1 * num2;
          break;
        default:
          return 'Invalid operation';
      }
  
      // Store the operation and result in the history array
      history.push(`${num1} ${operation} ${num2} = ${result}`);
  
      return `Result of ${operation}: ${result}`;
    }
  
    function getHistory() {
      return history;
    }
  
    return {
      performOperation,
      getHistory,
    };
  }
  
  // Example usage:
  const calculatorInstance = calculator();
  console.log(calculatorInstance.performOperation('addition', 5, 3)); // Result of addition: 8
  console.log(calculatorInstance.getHistory()); // ['5 addition 3 = 8']
  