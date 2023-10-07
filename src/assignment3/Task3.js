//Assignment3
//**Use-case:** Determines if a number is negative.

function isNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
module.exports = isNegative;
console.log(isNegative(-17));
