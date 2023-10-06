/**
 * verify two strings are Anagram
 * @param {string} string1 
 * @param {string} string2 
 * @returns true if strings are anagram
 */
function areAnagram(string1, string2) {
    let areStringsAnagram = true;
    let lengthOfString1 = string1.length;
    let lengthOfString2 = string2.length;

    if (lengthOfString1 !== lengthOfString2) {
        return false;
    }

    let finalString1 = string1.toLowerCase().split('').sort().join('');
    let finalString2 = string2.toLowerCase().split('').sort().join('');

    if (finalString1 !== finalString2) {
        areStringsAnagram = false;
    }

    return areStringsAnagram;
}
