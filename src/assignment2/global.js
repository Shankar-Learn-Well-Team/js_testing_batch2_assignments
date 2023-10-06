var globalVar = "I am global"; // This variable is in the global scope.

function greet() {
  console.log(globalVar); // This will log "I am global" because 'globalVar' is accessible from within the function.
}

greet();
console.log(globalVar); 