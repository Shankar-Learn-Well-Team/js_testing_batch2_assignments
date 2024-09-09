# Introduction to Node.js, Core Modules, and NPM

## Overview of Node.js

Node.js is a runtime environment that allows the execution of JavaScript on the server-side. It leverages the V8 JavaScript runtime for high performance and provides a versatile platform for building scalable applications.

### Why Node.js?

Node.js brings the power of JavaScript to server-side development with the following key features:

-   **Non-blocking I/O:** Efficient handling of concurrent requests.
-   **Extensive Ecosystem:** Large collection of libraries and packages.
-   **Scalability:** Built for building scalable and high-performance applications.

## Installation and Setup

Ensure Node.js is installed on machine by following the official installation guide: [Official Node.js Installation Guide](https://nodejs.org/en/download/)

## Introduction to NPM (Node Package Manager)

NPM is the package manager for Node.js, facilitating dependency management and package distribution.

### Managing Dependencies

Understanding `package.json` and `package-lock.json` files is pivotal for effective dependency management.

#### `package.json`: Configuration File for Node.js Projects

The `package.json` file is a crucial part of Node.js projects, serving as a configuration file that includes metadata about the project and its dependencies.

Here is a breakdown of key sections in `package.json`:

-   **`name`:** The name of the package. It should be unique within the npm registry.

-   **`version`:** The version number of the package. It follows the semantic versioning (semver) format.

-   **`main`:** The entry point of the application. By default, it is set to `"main": "index.js"`, indicating that the `index.js` file is the main file of project.

-   **`scripts`:** Contains scripts that can be executed with npm. Common scripts include `"start"`, `"test"`, etc.

-   **`dependencies`:** Lists the project's runtime dependencies. These are the packages required for application to run.

-   **`devDependencies`:** Lists dependencies that are only needed during development, such as testing libraries or build tools.

-   **`author`, `license`, `description`, etc.:** Additional metadata about the project.

Here is an example `package.json`:

```json
{
    "name": "my-node-app",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "jest"
    },
    "dependencies": {
        "express": "^4.17.1",
        "lodash": "^4.17.21"
    },
    "devDependencies": {
        "jest": "^27.2.2"
    },
    "author": "Author Name",
    "license": "MIT",
    "description": "A sample Node.js application"
}
```

In this example, the project depends on the `express` and `lodash` libraries for runtime, and `jest` is a development dependency used for testing.

#### Create and Understand `package.json`

1. Open terminal and navigate to the root of project.
2. Run `npm init` to create a `package.json` file. Follow the prompts to fill in the details.
3. Add dependencies by running `npm install <package-name> --save` for runtime dependencies or `npm install <package-name> --save-dev` for development dependencies.
4. Observe how the `package.json` file is updated with the new dependencies.

## Importing Modules in Node.js

Node.js supports two main approaches for importing modules: `import` and `require`. Let's explore their differences.

### `require` in CommonJS (Node.js Pre-v13)

The `require` statement is the traditional way of importing modules in Node.js. It is part of the CommonJS module system.

```javascript
// Using require to import a module
const fs = require('fs');
```

### `import` in ES Modules (Node.js v13+)

With the introduction of ECMAScript Modules (ESM) in Node.js v13 and later, the `import` statement became an alternative for module imports.

```javascript
// Using import to import a module
import fs from 'fs';
```

### Key Differences:

-   **Syntax:**

    -   `require` uses CommonJS syntax.
    -   `import` uses ECMAScript Modules syntax.

-   **Dynamic vs. Static:**

    -   `require` is dynamically evaluated.
    -   `import` is statically evaluated, which allows for tree-shaking.

-   **Usage in Node.js Versions:**
    -   `require` is widely supported in all Node.js versions.
    -   `import` is available in Node.js v13 and later, with the `.mjs` extension or `"type": "module"` in `package.json`.

### ESLint Configuration

ESLint can be configured to enforce the usage of one style over the other.

#### Configuring ESLint for `require`

```javascript
// .eslintrc.js or .eslintrc.json
module.exports = {
    // ...
    rules: {
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ImportDeclaration',
                message: 'Use require() instead.',
            },
        ],
    },
};
```

#### Configuring ESLint for `import`

```javascript
// .eslintrc.js or .eslintrc.json
module.exports = {
    // ...
    rules: {
        'no-restricted-syntax': [
            'error',
            {
                selector: 'CallExpression[callee.name="require"]',
                message: 'Use import instead.',
            },
        ],
    },
};
```

## Running JavaScript in Browser vs. Node.js

JavaScript execution in the browser and Node.js environments differs. Understanding these distinctions is crucial for writing cross-compatible code.

### Browser Environment

-   **Global Object:** `window`
-   **Asynchronous Operations:** DOM events, AJAX calls.

### Node.js Environment

-   **Global Object:** `global`
-   **Asynchronous Operations:** File system operations, network calls.
