// ### 4. Data Transformation

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.updatedata = function (uname, uage, ucity) {
        this.name = uname;
        this.age = uage;
        this.city = ucity;
    };
}

const inputval = new Person('Alice', 30, 'New York');
console.log(inputval);
console.log('Updated Person Property- ');
inputval.updatedata('Bob', 25, 'Los Angeles');
console.log(inputval);

// ### 5. Math Series

let PrimeNos = [];
function primeno() {
    let localVar;
    return function innerScope() {
        for (let i = 2; i <= 30; i++) {
            localVar = 0;
            for (j = 1; j <= i; j++) {
                if (i % j == 0) {
                    localVar++;
                }
            }
            if (localVar == 2) {
                PrimeNos.push(i);
            }
        }
    };
}

const innerScopeFunc = primeno();
innerScopeFunc();
console.log('Prime no - ' + PrimeNos);

// ### 1. Sum Calculator

function operation(operation) {
    return function (a, b) {
        if (operation == 'add') {
            return a + b;
        } else if (operation == 'mul') {
            return a * b;
        } else if (operation == 'sub') {
            return a - b;
        } else if (operation == 'div') {
            return a / b;
        }
    };
}
const innerScopeFunction = operation('add');
console.log(innerScopeFunction(5, 5));
