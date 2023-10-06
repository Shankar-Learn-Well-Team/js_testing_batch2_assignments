function isEven(n) {
    if (Number.isInteger(n) === true) {
        if (n % 2 == 0) {
            console.log(true);
        }
    } else {
        console.log(false);
    }
}

isEven(8);
