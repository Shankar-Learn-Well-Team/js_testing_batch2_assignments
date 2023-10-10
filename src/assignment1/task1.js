// Task 1: Create an array of numbers and write a function to calculate their sum.

let array1 = [11, 12, 3, 14, 5];

function addarray() {
    let array_sum = 0;
    for (let i = 0; i < array1.length; i++) {
        array_sum = array_sum + array1[i];
    }
    return array_sum;
}
console.log(addarray());

// Task 2: Write a function that finds the maximum value in an array of numbers.

let array2 = [1, 2, 13, 14, 5];

//find max value using math.max function

function findmaxno() {
    let maxvalue = Math.max(...array2);
    return maxvalue;
}

console.log(findmaxno());

//find max value using for loop

function findmaxnoUsingForloop() {
    let temp = array2[0];
    for (let i = 0; i < array2.length; i++) {
        if (temp < array2[i]) {
            temp = array2[i];
        }
    }
    return temp;
}

console.log(findmaxnoUsingForloop());
