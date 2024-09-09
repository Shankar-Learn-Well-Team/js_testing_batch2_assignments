# Lexical Scope in JavaScript

Lexical scope, also known as static scope, is a fundamental concept in JavaScript that determines how variable access is resolved based on the physical structure of your code. It plays a crucial role in understanding variable visibility and behavior in functions and blocks.

## Lexical Scope Principles

### 1. Scope Based on Declaration
Lexical scope is determined by where variables and functions are declared, not where they are executed. Variables are bound to their enclosing scope at the time of declaration.

### 2. Scope Hierarchy
JavaScript uses a hierarchical scope structure. When you reference a variable, JavaScript searches for it in the current scope and then proceeds to outer (enclosing) scopes until it finds the variable or reaches the global scope.

## Lexical Scope Example

```javascript
function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        const innerVar = 'I am from inner';
        console.log(outerVar, innerVar);
    }

    inner();
}

outer();
```
## Sequence

In this example:

- outerVar is in the lexical scope of inner. It's accessible within inner because it's in the enclosing scope.
- innerVar is in the lexical scope of inner. It's accessible within inner as well.

## Benefits of Lexical Scope

1. Predictable Variable Access: Lexical scope ensures that variables are resolved predictably based on their declaration in the source code.
2. Code Readability: It promotes code organization and readability by making it clear where variables are defined and accessible.

## Conclusion

Understanding lexical scope is essential for writing clean and maintainable JavaScript code. It helps you control variable access and reduces the risk of unexpected behavior.