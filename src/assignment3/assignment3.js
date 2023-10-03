
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

function isFibonacciNumber(num) {
  if (num < 0) {
    return false;
  }
  const condition1 = isPerfectSquare(5 * num * num + 4);
  const condition2 = isPerfectSquare(5 * num * num - 4);

  return condition1 || condition2;
}

module.exports = isFibonacciNumber;
