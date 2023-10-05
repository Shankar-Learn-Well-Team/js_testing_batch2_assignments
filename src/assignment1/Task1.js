function generatePrimes(limit) {
    const primes = [];
  
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    let currentNum = 2; 
    
    while (primes.length < limit) {
      if (isPrime(currentNum)) {
        primes.push(currentNum);
      }
      currentNum++;
    }
  
    return primes;
  }
  
  // Generate the first 10 prime numbers
  const first10Primes = generatePrimes(10);
  
  console.log(`Prime numbers: [${first10Primes.join(', ')}]`);