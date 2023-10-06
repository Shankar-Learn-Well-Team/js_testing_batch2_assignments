
// 19. **isCubeNumber:**

//     - **Use-case:** Determines if a number is a cube number.
//     - **Sample Inputs:** (27)
//     - **Sample Output:** True
//     - **Constraints:** Works only for non-negative integers.
//     - **Operation:** A cube number is a number that is the cube of an integer.



function isCubicNumber(number) {
 
  if (Number.isInteger(number) && number > 0) {
    const cubeRoot = Math.cbrt(number);

    return Number.isInteger(cubeRoot);
  } else {

    return false;
  }
}
const input = 27; 
const isCubic = isCubicNumber(input);

if (isCubic) {
  console.log(input + " is a positive cubic number: True");
} else {
  console.log(input + " is not a cubic number: False");
}


