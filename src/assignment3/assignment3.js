function isPalindrome(input) {

    input = input.toString();
    var cleanInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

   return cleanInput === cleanInput.split('').reverse().join('');
}
// Sample Inputs
var input1 = "radar";
var input2 = 121;

// Check if inputs are palindromes
var output1 = isPalindrome(input1);
var output2 = isPalindrome(input2);

console.log(output1); // Output: true
console.log(output2); // Output: true
