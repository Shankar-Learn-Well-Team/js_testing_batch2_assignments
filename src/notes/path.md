# `path`

-   **Understanding and Manipulating File Paths:**

    -   The `path` module is essential for working with file paths.

        **Commonly Used Methods:**

        -   `path.join([...paths])`: Join all path segments.

            -   **Definition:** Joins all given path segments together.
            -   **Syntax:**
                ```javascript
                const fullPath = path.join(__dirname, 'files', 'example.txt');
                console.log(fullPath);
                ```
            -   **Output:**
                ```javascript
                // Full path of the file
                ```

        -   `path.basename(path)`: Returns the last portion of a path.

            -   **Definition:** Returns the last portion of a path, similar to `basename` in POSIX.
            -   **Syntax:**
                ```javascript
                const fileName = path.basename('/path/to/example.txt');
                console.log(fileName);
                ```
            -   **Output:**
                ```javascript
                // 'example.txt'
                ```

        -   `path.dirname(path)`: Returns the directory name of a path.

            -   **Definition:** Returns the directory name of a path.
            -   **Syntax:**
                ```javascript
                const directoryName = path.dirname('/path/to/example.txt');
                console.log(directoryName);
                ```
            -   **Output:**
                ```javascript
                // '/path/to'
                ```

        -   `path.extname(path)`: Returns the extension of a path.

            -   **Definition:** Returns the extension of a path.
            -   **Syntax:**
                ```javascript
                const extension = path.extname('/path/to/example.txt');
                console.log(extension);
                ```
            -   **Output:**
                ```javascript
                // '.txt'
                ```

        -   `path.parse(path)`: Returns an object from a path string.

            -   **Definition:** Returns an object from a path string.
            -   **Syntax:**
                ```javascript
                const pathObject = path.parse('/path/to/example.txt');
                console.log(pathObject);
                ```
            -   **Output:**
                ```javascript
                // Object containing root, dir, base, ext, name
                ```

        -   `path.format(pathObject)`: Returns a path string from an object.

            -   **Definition:** Returns a path string from an object.
            -   **Syntax:**
                ```javascript
                const formattedPath = path.format({
                    dir: '/path/to',
                    base: 'example.txt',
                });
                console.log(formattedPath);
                ```
            -   **Output:**
                ```javascript
                // '/path/to/example.txt'
                ```

        -   `path.delimiter`: Returns the PATH delimiter based on the current OS environment.
            -   **Definition:** Returns the PATH delimiter based on the current OS environment.
            -   **Syntax:**
                ```javascript
                const delimiter = path.delimiter;
                console.log(delimiter);
                ```
            -   **Output:**
                ```javascript
                // Path delimiter based on the current OS environment
                ```

