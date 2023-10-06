//  Assignment 3--
// **hasUniqueCharacters:**

//     - **Use-case:** Verifies if a string has all unique characters.
//     - **Sample Inputs:** ("hello")
//     - **Sample Output:** False
//     - **Constraints:** Case-sensitive comparison.
//     - **Operation:** A string with all unique characters has no repeated characters.

const input1 = 'hello';
 
const validateUnique = (str) => {

    const s = new Set();

    for (const ch of str) {
    s.add(ch);

    }

    if (str.length !== s.size) {

        return false;

    }
    return true;

}

console.log(input1, validateUnique(input1));