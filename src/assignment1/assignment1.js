let a = 5,
    b = 3,
    c;
function calc() {
    let a = 5,
        b = 3,
        c;
    function add() {
        c = a + b;
        console.log(c);
    }
    console.log(c);
    return add;
}
let out = calc();
out();
