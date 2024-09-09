# Operators in JavaScript

Operators in JavaScript are symbols that represent computations or operations to be performed on operands. Operands can be variables, values, or expressions. JavaScript supports various types of operators, including:

### 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

-   Addition (`+`): Adds two values together.

    ```javascript
    const result = 5 + 3; // Result is 8
    ```

-   Subtraction (`-`): Subtracts the right operand from the left operand.

    ```javascript
    const result = 10 - 4; // Result is 6
    ```

-   Multiplication (`*`): Multiplies two values.

    ```javascript
    const result = 3 * 6; // Result is 18
    ```

-   Division (`/`): Divides the left operand by the right operand.

    ```javascript
    const result = 12 / 4; // Result is 3
    ```

-   Modulus (`%`): Returns the remainder after division.
    ```javascript
    const result = 15 % 4; // Result is 3 (remainder)
    ```

### 2. Comparison Operators

Comparison operators compare two values and return a Boolean result (`true` or `false`).

-   Equal (`==` or `===`): Checks if two values are equal. (`===` checks both value and type)

    ```javascript
    const isEqual = 5 === '5'; // Result is false (different types)
    ```

-   Not Equal (`!=` or `!==`): Checks if two values are not equal. (`!==` checks both value and type)

    ```javascript
    const isNotEqual = 5 !== '5'; // Result is true (different types)
    ```

-   Greater Than (`>`): Checks if the left operand is greater than the right operand.

    ```javascript
    const isGreaterThan = 10 > 5; // Result is true
    ```

-   Less Than (`<`): Checks if the left operand is less than the right operand.

    ```javascript
    const isLessThan = 3 < 7; // Result is true
    ```

-   Greater Than or Equal To (`>=`): Checks if the left operand is greater than or equal to the right operand.

    ```javascript
    const isGreaterOrEqual = 7 >= 7; // Result is true
    ```

-   Less Than or Equal To (`<=`): Checks if the left operand is less than or equal to the right operand.
    ```javascript
    const isLessOrEqual = 4 <= 3; // Result is false
    ```

### 3. Logical Operators

Logical operators perform logical operations and return a Boolean result.

-   AND (`&&`): Returns `true` if both operands are `true`.

    ```javascript
    const isTrue = true && true; // Result is true
    ```

-   OR (`||`): Returns `true` if at least one operand is `true`.

    ```javascript
    const isTrue = true || false; // Result is true
    ```

-   NOT (`!`): Negates the value of an operand.
    ```javascript
    const isFalse = !true; // Result is false
    ```

### 4. Assignment Operators

Assignment operators assign values to variables.

-   Assignment (`=`): Assigns a value to a variable.

    ```javascript
    let x = 10;
    ```

-   Addition Assignment (`+=`): Adds a value to a variable and assigns the result.

    ```javascript
    let x = 5;
    x += 3; // x is now 8
    ```

-   Subtraction Assignment (`-=`): Subtracts a value from a variable and assigns the result.

    ```javascript
    let x = 10;
    x -= 4; // x is now 6
    ```

-   Multiplication Assignment (`*=`): Multiplies a variable by a value and assigns the result.

    ```javascript
    let x = 3;
    x *= 2; // x is now 6
    ```

-   Division Assignment (`/=`): Divides a variable by a value and assigns the result.
    ```javascript
    let x = 12;
    x /= 4; // x is now 3
    ```

### 5. Unary Operators

Unary operators operate on a single operand.

-   Increment (`++`): Increases the value of a variable by 1.

    ```javascript
    let count = 5;
    count++; // count is now 6
    ```

-   Decrement (`--`): Decreases the value of a variable by 1.

    ```javascript
    let count = 8;
    count--; // count is now 7
    ```

-   Negation (`-`): Negates a numeric value.
    ```javascript
    const negatedValue = -10; // Result is -10
    ```

### 6. Ternary Operator (Conditional Operator)

The ternary operator is a shorthand for an `if-else` statement.

```javascript
const condition = true;
const result = condition ? 'True' : 'False'; // Result is "True"
```

### 7. Bitwise Operators

Bitwise operators perform operations at the bit level.

-   Bitwise AND (`&`): Performs a bitwise AND operation.
-   Bitwise OR (`|`): Performs a bitwise OR operation.
-   Bitwise XOR (`^`): Performs a bitwise XOR (exclusive OR) operation.
-   Bitwise NOT (`~`): Inverts the bits of a value.
-   Left Shift (`<<`): Shifts the bits to the left.
-   Right Shift (`>>`): Shifts the bits to the right.
-   Zero-fill Right Shift (`>>>`): Shifts the bits to the right with zero fill.
