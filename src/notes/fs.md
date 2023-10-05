# `fs` (File System)

-   **Basics of Reading and Writing Files:**

    -   The `fs` module allows reading from and writing to the file system.

        **Commonly Used Methods:**

        -   `fs.readFile(path, options, callback)`: Read the contents of a file.

            -   **Definition:** Asynchronously reads the entire contents of a file.
            -   **Syntax:**
                ```javascript
                fs.readFile('example.txt', 'utf8', (err, data) => {
                    if (err) throw err;
                    console.log(data); // Contents of the file
                });
                ```
            -   **Output:**
                ```javascript
                // Contents of the file
                ```

        -   `fs.writeFile(file, data, options, callback)`: Write data to a file.

            -   **Definition:** Asynchronously writes data to a file, replacing the file if it already exists.
            -   **Syntax:**
                ```javascript
                fs.writeFile(
                    'example.txt',
                    'Hello, Node.js!',
                    'utf8',
                    (err) => {
                        if (err) throw err;
                        console.log('File written successfully.');
                    },
                );
                ```
            -   **Output:**
                ```javascript
                // File written successfully.
                ```

        -   `fs.mkdir(path.join(__dirname, '/test'), {}, err => {...})`: Create a folder.

            -   **Definition:** Asynchronously creates a directory.
            -   **Syntax:**
                ```javascript
                fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
                    if (err) throw err;
                    console.log('Folder created...');
                });
                ```
            -   **Output:**
                ```javascript
                // Folder created...
                ```

        -   `fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {...})`: Create and write to a file.

            -   **Definition:** Asynchronously writes data to a file, replacing the file if it already exists.
            -   **Syntax:**

                ```javascript
                fs.writeFile(
                    path.join(__dirname, '/test', 'hello.txt'),
                    'Hello World!',
                    (err) => {
                        if (err) throw err;
                        console.log('File written to...');

                        // File append
                        fs.appendFile(
                            path.join(__dirname, '/test', 'hello.txt'),
                            ' I love Node.js',
                            (err) => {
                                if (err) throw err;
                                console.log('File written to...');
                            },
                        );
                    },
                );
                ```

            -   **Output:**
                ```javascript
                // File written to...
                // File written to...
                ```

        -   `fs.rename(oldPath, newPath, err => {...})`: Rename a file.
            -   **Definition:** Asynchronously renames a file or directory.
            -   **Syntax:**
                ```javascript
                fs.rename(
                    path.join(__dirname, '/test', 'hello.txt'),
                    path.join(__dirname, '/test', 'helloworld.txt'),
                    (err) => {
                        if (err) throw err;
                        console.log('File renamed...');
                    },
                );
                ```
            -   **Output:**
                ```javascript
                // File renamed...
                ```
