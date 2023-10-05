function isArmstrongNumber(number) {
  if (number < 0) {
    return false; 
  }

  const numStr = number.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

const inputNumber = 153;
const isArmstrong = isArmstrongNumber(inputNumber);
console.log(isArmstrong); 