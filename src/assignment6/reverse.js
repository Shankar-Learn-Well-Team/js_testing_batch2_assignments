module.exports = function reverse(str) {
    let rev = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev === str) {
        return true;
    } else {
        return false;
    }
}
