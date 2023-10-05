function createEncryptor() {
    // Define encryption key using a closure
    const encryptionKey = {
      S: 'U',
      e: 'f',
      c: 'd',
      r: 'l',
      t: 'j',
      ' ': 's',
      M: 'N',
      a: 'f',
      g: 't',
    };
  
    // Define the encrypt function using the encryption key
    function encrypt(input) {
      return input.replace(/[Segtr Mag]/g, (match) => encryptionKey[match]);
    }
  
    return encrypt;
  }
  
  // Demonstrate using hoisting and closure
  const encryptMessage = createEncryptor();
  
  // Input string
  const inputString = "Secret Message";
  
  // Encrypt the input string
  const encryptedString = encryptMessage(inputString);
  
  console.log(`Input string: "${inputString}"`);
  console.log(`Encrypted string: "${encryptedString}"`);
  