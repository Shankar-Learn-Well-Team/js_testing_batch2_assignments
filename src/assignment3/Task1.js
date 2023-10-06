function isConsonant(char) {
  char = char.toLowerCase();
  
  if (char >= 'a' && char <= 'z' && !['a', 'e', 'i', 'o', 'u'].includes(char)) {
    return true;
  } else {
    return false;
  }
}

console.log(isConsonant('b')); 
console.log(isConsonant('u')); 

