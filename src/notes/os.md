# `os` (Operating System)

-   **Accessing System Information:**

    -   The `os` module provides information about the operating system.

        **Commonly Used Methods:**

        -   `os.platform()`: Returns the operating system platform.

            -   **Definition:** Returns a string identifying the operating system platform.
            -   **Syntax:**
                ```javascript
                console.log(os.platform()); // 'win32' on Windows, 'linux' on Linux, etc.
                ```
            -   **Output:**
                ```javascript
                // 'win32' on Windows, 'linux' on Linux, etc.
                ```

        -   `os.arch()`: Returns the CPU architecture.

            -   **Definition:** Returns the CPU architecture.
            -   **Syntax:**
                ```javascript
                console.log(os.arch());
                ```
            -   **Output:**
                ```javascript
                // CPU architecture
                ```

        -   `os.cpus()`: Returns an array of CPU core information.

            -   **Definition:** Returns an array of CPU core information.
            -   **Syntax:**
                ```javascript
                console.log(os.cpus());
                ```
            -   **Output:**
                ```javascript
                // Array of CPU core information
                ```

        -   `os.freemem()`: Returns the amount of free system memory in bytes.

            -   **Definition:** Returns the amount of free system memory in bytes.
            -   **Syntax:**
                ```javascript
                console.log(os.freemem());
                ```
            -   **Output:**
                ```javascript
                // Free system memory in bytes
                ```

        -   `os.totalmem()`: Returns the total amount of system memory in bytes.

            -   **Definition:** Returns the total amount of system memory in bytes.
            -   **Syntax:**
                ```javascript
                console.log(os.totalmem());
                ```
            -   **Output:**
                ```javascript
                // Total system memory in bytes
                ```

        -   `os.homedir()`: Returns the home directory of the current user.

            -   **Definition:** Returns the home directory of the current user.
            -   **Syntax:**
                ```javascript
                console.log(os.homedir());
                ```
            -   **Output:**
                ```javascript
                // Home directory of the current user
                ```

        -   `os.uptime()`: Returns the system uptime in seconds.
            -   **Definition:** Returns the system uptime in seconds.
            -   **Syntax:**
                ```javascript
                console.log(os.uptime());
                ```
            -   **Output:**
                ```javascript
                // System uptime in seconds
                ```
