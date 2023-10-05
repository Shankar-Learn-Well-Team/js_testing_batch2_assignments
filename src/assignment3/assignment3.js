const prompt = require('prompt-sync')();
perfectNumber();
function perfectNumber() {
    var num = prompt('Enter a Number: ');
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == num) console.log(`${num} is Perfect Number`);
    else console.log(`${num} is not Perfect Number`);
}
