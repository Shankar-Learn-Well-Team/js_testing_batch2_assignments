function createCalculator() {
    let history = []; 
  
    function performOperation(operator, num1, num2) {
      let result;
      switch (operator) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        
        default:
          return 'Invalid operator';
      }
  
      history.push(`${num1} ${operator} ${num2} = ${result}`);
  
      return result;
    }
  
    function getHistory() {
      return history;
    }
  
    return {
      performOperation,
      getHistory,
    };
  }
  
  const calculator = createCalculator();
  
  const result = calculator.performOperation('add', 5, 3);
  
  const history = calculator.getHistory();
  
  console.log(`Result of addition: ${result}`);
  console.log('Operation History:');
  history.forEach((operation) => {
    console.log(operation);
  });
