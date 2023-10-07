//Assignment2
// Program 1 String Reversal
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString("Hello, World!"));


// Program 2  Array Filtering
function createFilter(length) {
    function filterByLength(item) {
        return item.length > length;
    }
return filterByLength;
}
var filter = createFilter(5);
var fruits = ["apple", "banana", "kiwi", "strawberry"];
console.log(fruits.filter(filter)); 


//Program 3 Math Series

function generatePrimes(n) {
    var primes = [];
    for (var i = 2; primes.length < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
    function isPrime(num) {
        for (var j = 2, sqrt = Math.sqrt(num); j <= sqrt; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return num > 1;
    }
}
console.log(generatePrimes(10)); 
