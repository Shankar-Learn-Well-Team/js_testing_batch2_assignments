const binaryInput = 0b110011;

function isBinaryPalindrome(binaryNumber) {
    const binaryString = binaryNumber.toString(2);
    console.log(binaryString);

    const reversedBinaryString = binaryString.split('').reverse().join('');
    console.log(reversedBinaryString);

    return binaryString === reversedBinaryString;
}

const result = isBinaryPalindrome(binaryInput);

console.log(result);