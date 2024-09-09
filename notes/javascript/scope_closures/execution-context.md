# JavaScript Execution Contexts

In JavaScript, an execution context represents the environment in which code is executed. Understanding execution contexts is essential for grasping the scoping and variable access in your JavaScript programs.

## Types of Execution Contexts

### 1. Global Execution Context

-   The default execution context for code outside of any function.
-   Contains global variables and functions.
-   Created when your script begins running.

### 2. Function Execution Context

-   Created each time a function is called.
-   Contains local variables, function parameters, and references to its outer lexical environment (i.e closure reference).

## Variable Environment a.k.a Global Memory

The Variable Environment is a fundamental component of an execution context, responsible for managing variables, function declarations, and function parameters. It's a crucial part of understanding how variables are accessed within an execution context.

-   **Variables**: Stores variables declared with `var`, `let`, or `const`. These variables are accessible within their respective execution contexts.

-   **Function Declarations**: Contains function declarations. These functions can be invoked within the scope of their execution context.

-   **Function Parameters**: Holds the parameters passed to the function. These parameters are treated as local variables within the function.

## The Lexical Environment

The Lexical Environment, another essential part of an execution context, determines the lexical scope of variables. Lexical scope is determined by where functions and blocks are declared in your code, not where they are executed.

-   **Outer Environment Reference**: This reference points to the outer execution context, allowing access to variables from the surrounding scope. It plays a crucial role in maintaining the scope chain.

-   **Lexical Scope**: Lexical scope is based on the physical structure of your code. It determines which variables are accessible within a function or block, based on where they are declared in the source code.

## Example

```javascript
const globalVar = 'I am global';

function outerFunction() {
    const outerVar = 'I am from outer';

    function innerFunction() {
        const innerVar = 'I am from inner';
        console.log(globalVar, outerVar, innerVar);
    }

    innerFunction();
}

outerFunction();
```

## Sequence

In this example:

1. The global execution context holds globalVar.
2. When outerFunction is called, a new execution context is created, containing outerVar.
3. When innerFunction is called inside outerFunction, it creates its own execution context with innerVar.
4. Variable access is determined by the lexical scope.

## Conclusion

Understanding execution contexts and the way they manage variables and scope is vital for writing efficient and maintainable JavaScript code.
