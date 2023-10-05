function isDescendingOrder(sequence) {
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > sequence[i - 1]) {
      return false; 
    }
  }
  return true; 
}
const inputSequence = [5, 4, 3, 2, 1];
const isDescending = isDescendingOrder(inputSequence);
console.log(isDescending); 
