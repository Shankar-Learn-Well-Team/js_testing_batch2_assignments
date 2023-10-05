# `http` (Hypertext Transfer Protocol)

-   **Introduction to the `http` Module:**

    -   The `http` module in Node.js is crucial for creating a basic HTTP server.

        **Commonly Used Methods:**

        -   `http.createServer(requestListener)`: Creates an HTTP server.

            -   **Definition:** Returns a new instance of `http.Server`.
            -   **Syntax:**
                ```javascript
                const server = http.createServer((req, res) => {
                    // Request handling logic
                    res.write('Hello World');
                    res.end();
                });
                ```
            -   **Output:**
                ```javascript
                // Server instance created
                ```

        -   `server.listen(port, hostname, backlog, callback)`: Binds and listens for connections on the specified host and port.

            -   **Definition:** Binds and listens for connections on the specified host and port.
            -   **Syntax:**
                ```javascript
                server.listen(5000, 'localhost', () => {
                    console.log('Server running on http://localhost:5000/');
                });
                ```
            -   **Output:**
                ```javascript
                // Server running on http://localhost:5000/
                ```

        -   `server.close(callback)`: Stops the server from accepting new connections.
            -   **Definition:** Stops the server from accepting new connections.
            -   **Syntax:**
                ```javascript
                server.close(() => {
                    console.log('Server closed');
                });
                ```
            -   **Output:**
                ```javascript
                // Server closed
                ```
