// Task 02 : 

function checkFalsyOrTruthy(variable) {
    if (!variable) {
        console.log("The variable is falsy.");
    } else {
        console.log("The variable is truthy.");
    }
}

checkFalsyOrTruthy(null);          // The variable is falsy.
checkFalsyOrTruthy(undefined);     // The variable is falsy.
checkFalsyOrTruthy(0);             // The variable is falsy.
checkFalsyOrTruthy(42);            // The variable is truthy.
checkFalsyOrTruthy("Hello");       // The variable is truthy.
checkFalsyOrTruthy("");            // The variable is falsy.
checkFalsyOrTruthy([]);            // The variable is falsy.
checkFalsyOrTruthy({});            // The variable is falsy.