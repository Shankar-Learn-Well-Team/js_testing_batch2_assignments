//Task 1: Write a program that checks if a number is positive, negative, or zero
// and prints the result.

function Check(number){
if(number>0){
    console.log("number is positive",number);
}else if(number<0){
    console.log("number is negative",number);
}else{
    console.log("number is Zero",number);
    }
}

Check(5);
Check(-6);
Check(0);
