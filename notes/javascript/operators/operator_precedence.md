# Operator Precedence

In JavaScript, operator precedence determines the order in which different operators are evaluated when there are multiple operators in an expression. Operators with higher precedence are evaluated first, followed by those with lower precedence.

## Key Points about Operator Precedence in JavaScript

1. Operators with higher precedence are evaluated first.
2. Parentheses can be used to control the order of evaluation and override the default precedence.
3. Operators with the same precedence are evaluated from left to right.

## Operator Precedence Overview

Here's a general overview of operator precedence in JavaScript:

1. **Grouping:** `()`
2. **Member Access:** `.` (dot notation), `[]` (bracket notation)
3. **Function Call/Arguments:** `()`
4. **Postfix Increment/Decrement:** `++`, `--`
5. **Unary Operators:** `+`, `-`, `!`, `~`, `typeof`, `void`, `delete`
6. **Exponentiation:** `**`
7. **Multiplication/Division/Remainder:** `*`, `/`, `%`
8. **Addition/Subtraction:** `+`, `-`
9. **Bitwise Shift:** `<<`, `>>`, `>>>`
10. **Relational Operators:** `<`, `<=`, `>`, `>=`, `instanceof`, `in`
11. **Equality:** `==`, `!=`, `===`, `!==`
12. **Bitwise AND:** `&`
13. **Bitwise XOR:** `^`
14. **Bitwise OR:** `|`
15. **Logical AND:** `&&`
16. **Logical OR:** `||`
17. **Conditional (Ternary) Operator:** `? :`
18. **Assignment Operators:** `=`, `+=`, `-=` etc.
19. **Comma Operator:** `,` (used to separate expressions)

It's important to be aware of operator precedence while writing complex expressions in JavaScript, as it can significantly impact the result of the computation. If in doubt, using parentheses to clarify the order of evaluation is a good practice.
