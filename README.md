# Table of Contents

-   [Assignment Instructions](#assignment-instructions)
-   [Project Structure](#project-structure)
-   [Package.json Explanation](#packagejson-explanation)
-   [Launch.json Configuration](#launchjson-configuration)
-   [Webpack Configuration (Optional)](#webpack-configuration-optional)
    -   [Imports and Module Requirements](#imports-and-module-requirements)
    -   [Jest Test Execution](#jest-test-execution)
    -   [Webpack Configuration Object](#webpack-configuration-object)
    -   [Usage](#usage)

# Assignment Instructions

1. **Clone the Repository:**

    - Take a `git pull` of this repository [LINK](https://github.com/shankar-learnwell/js_testing_batch2_assignments).

2. **Open in Visual Studio Code:**

    - Open the cloned repository folder in Visual Studio Code.

3. **Install Dependencies:**

    - Run the following command to download the required packages. Make sure you are using the latest version of Node.js and npm.

    ```bash
    npm install
    ```

4. **Project Structure:**

    - Refer to the `Read.md` file in the repository to understand the project structure and any specific instructions.

5. **Assignment Check:**

    - Review the Assignment Questions assigned to you from the "Assignment 3" and "Assignment 4" tabs of this sheet.

6. **Create a New Branch:**

    - Create a new branch from the `main` branch. The branch name should follow this format: `dev/<developer_name>`

    ```bash
    git checkout -b dev/your_name
    ```

7. **Complete the Assignment:**

    - Work on your assigned tasks. When you've completed the assignment, commit your changes with a meaningful message:

    ```bash
    git commit -m "Your meaningful commit message here"
    ```

8. **Push to Origin:**

    - Push your branch to the remote repository (origin):

    ```bash
    git push origin dev/your_name
    ```

    (Note: You do not need to raise a pull request.)

9. **Update Assignment Status:**
    - Finally, update the "Status" column in the "Assignment 3" and "Assignment 4" tabs of this sheet to indicate that you have completed the assignment.

# Project Structure

1. **Project Files and Directories:**
    - `.env`: Configuration file for environment variables.
    - `.gitignore`: A file specifying patterns to be ignored by Git, often used to exclude build and dependency files.
    - `.prettierrc`: Configuration file for Prettier, a code formatter.
    - `babel.config.js`: Configuration file for Babel, a JavaScript compiler and transpiler.
    - `jest.config.js`: Configuration file for Jest, a JavaScript testing framework.
    - `package.json`: The project's package configuration file, including dependencies, scripts, and metadata.
    - `.vscode/launch.json`: Configuration file for Visual Studio Code debugger settings.

# Package.json Explanation

1. **Scripts Explanation:**

    - Here's an explanation of the scripts in the `package.json` file:

    ```json
    "scripts": {
        "prettier": "prettier --write .",
        "loggerOverride": "node logger-every-file",
        "start": "node src/index.js",
        "build": "webpack",
        "test": "npx jest --no-cache",
        "list-tests": "jest --listTests"
    }
    ```

    - `prettier`: Runs the Prettier tool to automatically format code files in the project.
    - `loggerOverride`: Executes the custom script `logger-every-file` for logging purposes.
    - `start`: Starts the Node.js application using the `src/index.js` file.
    - `build`: Initiates the Webpack build process, typically used for bundling and optimizing code.
    - `test`: Executes Jest tests with the `--no-cache` option to prevent caching of test results.
    - `list-tests`: Lists all available Jest tests in the project.

# Launch.json Configuration

1. **Visual Studio Code Debugging Configurations:**

    - The `.vscode/launch.json` file contains configurations for running and debugging your Node.js application in Visual Studio Code. There are four predefined configurations:

    ### 1. Run Node Application

    - **Description:** Launches your Node.js application.

    ### 2. Run Node File

    - **Description:** Runs a specific Node.js file.

    ### 3. Jest All Tests

    - **Description:** Runs all Jest tests in your project.

    ### 4. Jest Current File

    - **Description:** Runs Jest tests in the current file.

    These configurations allow you to easily run and debug your Node.js applications and Jest tests directly from Visual Studio Code. You can modify these configurations as needed to match your project's structure and requirements.

# Webpack Configuration (Optional)

1. **Webpack Configuration Overview:**

    - The `webpack.config.js` file is a critical part of your project's build setup, responsible for configuring Webpack, a popular JavaScript module bundler. It determines how your Node.js application is bundled, specifying entry points, loaders, plugins, and more. Below is an overview of the key components and concepts within the provided `webpack.config.js`:

    ## Imports and Module Requirements

    - `path`, `webpack`: These are Node.js built-in and external modules used for handling file paths and accessing Webpack functionality.

    - `CleanWebpackPlugin`: A Webpack plugin used for cleaning the output directory before each build.

    - `dotenv`: A module for loading environment variables from a `.env` file.

    - `child_process`: A built-in Node.js module for executing child processes (used for running Jest tests).

    - `logger-override`: An imported module for custom logging (not shown in the provided code).

    ## Jest Test Execution

    - `runTests()`: A custom function defined to run Jest tests synchronously. It uses the `execSync` function from the `child_process` module to execute Jest with the `npx jest --no-cache` command.

    - The function checks whether Jest tests pass successfully or fail and logs the outcome.

    ## Webpack Configuration Object

    - The `module.exports` statement exports an async function that returns the Webpack configuration object.

    - `mode`: Set to `'development'`, indicating that this configuration is intended for development purposes. You can change it to `'production'` for production builds.

    - `target`: Set to `'node'`, indicating that the bundle is intended to run in a Node.js environment.

    - `entry`: Defines the entry points for the application. In this case, it has an `index` entry point for the main application code. The test entry point is commented out but can be used for specifying test files.

    - `output`: Configures the output of the bundled files, specifying the filename pattern and output directory.

    - `resolve`: Specifies which file extensions Webpack should resolve when importing modules. It includes `.js`, `.mjs`, and `.json`.

    - `module`: Configures loaders for processing different file types. In this example, it uses Babel (`babel-loader`) to transpile JavaScript files.

    - `plugins`: Defines an array of Webpack plugins. It includes the `CleanWebpackPlugin` for cleaning the output directory and the `DefinePlugin` for defining environment variables.

    - `devtool`: Specifies the source map generation strategy to aid debugging.

    ## Jest Test Execution and Bundle Creation

    - The `runTests()` function is called within the async function.

    - If Jest tests fail (`!testsPassed`), the process exits with an error code (`process.exit(1)`), preventing further bundle creation.

    ## Usage

    - This configuration is used with Webpack to bundle Node.js applications, and it assumes that Jest is used for testing.

    - It is important to customize the `entry` point for tests (`tests` property under `entry`) if needed, based on the structure of your project.

    - The configuration can be further customized to match the specific requirements of your Node.js application and testing setup.
