function isDivisible(number, divisor) {
    // Use the modulus operator to check for divisibility
    if (number % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

// Sample inputs : 
const num = 10;
const divisor = 2;

if (isDivisible(num, divisor)) {
    //console.log(`${num} is divisible by ${divisor}`);
    console.log("True");
} else {
    //console.log(`${num} is not divisible by ${divisor}`);
    console.log("false");
}