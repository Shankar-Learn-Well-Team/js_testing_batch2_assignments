//Assignment4 
//**Create a Unique Numbers Set:**

let numbers = [7, 3, 12, 17, 3, 12, 7,224,45,45,224];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); 
uniqueNumbers.forEach((number) => {
console.log(number); 
});
