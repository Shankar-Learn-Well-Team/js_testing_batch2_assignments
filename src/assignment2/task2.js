//ques1 --------------------------------------------------------------------
//Array Filtering

const fruits = new Array('apple', 'banana', 'kiwi', 'strawberry');
function arrayman() {
    //outerFunction

    let str = fruits.toString();
    console.log(str);
    function logic() {
        //innerFunction
        console.log('arrays after filtering by length:');
        for (i = 0; i < fruits.length; i++) {
            if (fruits[i].length > 5) {
                console.log(fruits[i]);
            }
        }
    }
    return logic();
}

arrayman();

//ques2 --------------------------------------------------------------------------------------------------
// program to check if the string is palindrome or not

function checkPalindrome(string) {
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const value = checkPalindrome('racecar');

console.log(value);

//ques3 -------------------------------------------------------------------------------------------------------------

//Reverse a string
function reverseString(str) {
    if (str === '') {
        return '';
    }
    return reverseString(str.substring(1)) + str.charAt(0);
}

let str = 'abcd';
console.log(reverseString(str));

//let str1="aman";
//console.log(str1.substring(1))

//bcd a
//cd  ba
//d   cba
//    dcba
