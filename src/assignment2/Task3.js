//  Math Series

 //Task03 : Write a program that generates a series of numbers (e.g., Fibonacci sequence, prime numbers) and uses function hoisting and closures to efficiently calculate and store these numbers. 
  
function checkPrimeNumber() {
    const primes = [];
  
    function PrimeNo(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
  
      if (num % 2 === 0 || num % 3 === 0) return false;
  
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
  
      return true;
    }
  
    let currentNumber = 2;
    while (primes.length < 10) {
      if (PrimeNo(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    return primes;
  }
  
  const first10Primes = checkPrimeNumber();
  console.log("Prime numbers:", first10Primes);