# `fs` (File System) Synchronous Operations

-   **Synchronous File System Operations:**

    -   The `fs` module also provides synchronous methods for performing file system operations. These methods block the execution of your code until the operation is completed, which means they can potentially make your application less responsive if used inappropriately.

        **Commonly Used Synchronous Methods:**

        -   `fs.readFileSync(path, options)`: Read the contents of a file synchronously.

            -   **Definition:** Synchronously reads the entire contents of a file.
            -   **Syntax:**
                ```javascript
                try {
                    const data = fs.readFileSync('example.txt', 'utf8');
                    console.log(data); // Contents of the file
                } catch (err) {
                    console.error(err);
                }
                ```
            -   **Output:**
                ```javascript
                // Contents of the file
                ```

        -   `fs.writeFileSync(file, data, options)`: Write data to a file synchronously.

            -   **Definition:** Synchronously writes data to a file, replacing the file if it already exists.
            -   **Syntax:**
                ```javascript
                try {
                    fs.writeFileSync('example.txt', 'Hello, Node.js!', 'utf8');
                    console.log('File written successfully.');
                } catch (err) {
                    console.error(err);
                }
                ```
            -   **Output:**
                ```javascript
                // File written successfully.
                ```

        -   `fs.mkdirSync(path.join(__dirname, '/test'), options)`: Create a folder synchronously.

            -   **Definition:** Synchronously creates a directory.
            -   **Syntax:**
                ```javascript
                try {
                    fs.mkdirSync(path.join(__dirname, '/test'), {});
                    console.log('Folder created...');
                } catch (err) {
                    console.error(err);
                }
                ```
            -   **Output:**
                ```javascript
                // Folder created...
                ```

        -   `fs.renameSync(oldPath, newPath)`: Rename a file synchronously.
            -   **Definition:** Synchronously renames a file or directory.
            -   **Syntax:**
                ```javascript
                try {
                    fs.renameSync(
                        path.join(__dirname, '/test', 'hello.txt'),
                        path.join(__dirname, '/test', 'helloworld.txt'),
                    );
                    console.log('File renamed...');
                } catch (err) {
                    console.error(err);
                }
                ```
            -   **Output:**
                ```javascript
                // File renamed...
                ```

    -   When using these synchronous methods, it's essential to handle exceptions appropriately using `try...catch` blocks since they can throw errors if something goes wrong during the operation.
