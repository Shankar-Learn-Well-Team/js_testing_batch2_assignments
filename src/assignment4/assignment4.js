function isSquareNumber(num) {
  if (num < 0) {
    return false;
  }

  const squareRoot = Math.sqrt(num);
  return squareRoot === Math.floor(squareRoot);
}

module.exports = isSquareNumber;