// 9. **isPositive:**

//     - **Use-case:** Checks if a number is positive.
//     - **Sample Inputs:** (42)
//     - **Sample Output:** True
//     - **Constraints:** Applicable to numbers.
//     - **Operation:** A positive number is greater than zero.

function isPositive(num) {
   if(num>0){
    return true;
   }else {
    return false;
   }
}

const number = 42;
console.log("Is "+number+" Positive? ",isPositive(number));