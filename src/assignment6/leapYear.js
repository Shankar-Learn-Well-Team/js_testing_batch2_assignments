module.exports = function leapYrFn(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log('It is Leap Year -', year);
        return true;
    } else {
        console.log('It is not Leap Year');
        return false;
    }
};
