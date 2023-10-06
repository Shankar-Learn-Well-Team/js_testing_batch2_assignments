
function greet() {
    var message = "Hello, world!"; // This variable is in the local scope of the greet function.
    console.log(message); // This will log "Hello, world!" to the console.
  }
  
  greet();
  console.log(message); // This will result in an error because 'message' is not defined in the global scope.