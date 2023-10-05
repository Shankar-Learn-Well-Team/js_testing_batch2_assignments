function addUniqueNumberToSet(existingSet, newNumber) {
  existingSet.add(newNumber);
  return existingSet;
}


const existingSet = new Set([3, 7, 12]);
const newNumber = 5;

const updatedSet = addUniqueNumberToSet(existingSet, newNumber);
console.log(updatedSet);