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

    -   **Handling HTTP Methods:**

        -   **GET Request:**

            To handle GET requests, check the `req.method` property inside the request listener function and send an appropriate response. Here's an example:

            ```javascript
            const http = require('http');

            const server = http.createServer((req, res) => {
                if (req.method === 'GET') {
                    // Handle GET request
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('This is a GET request.');
                } else {
                    // Handle other HTTP methods
                    res.statusCode = 405;
                    res.setHeader('Allow', 'GET');
                    res.end('Method Not Allowed');
                }
            });

            server.listen(5000, 'localhost', () => {
                console.log('Server running on http://localhost:5000/');
            });
            ```

        -   **POST Request:**

            To handle POST requests, listen for data events on the request object to gather incoming data. Here's an example:

            ```javascript
            const http = require('http');

            const server = http.createServer((req, res) => {
                if (req.method === 'POST') {
                    let requestData = '';

                    req.on('data', (chunk) => {
                        requestData += chunk;
                    });

                    req.on('end', () => {
                        // Handle POST request with requestData
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end(`Received POST data: ${requestData}`);
                    });
                } else {
                    // Handle other HTTP methods
                    res.statusCode = 405;
                    res.setHeader('Allow', 'POST');
                    res.end('Method Not Allowed');
                }
            });

            server.listen(5000, 'localhost', () => {
                console.log('Server running on http://localhost:5000/');
            });
            ```

        -   **DELETE Request:**

            To handle DELETE requests, follow a similar pattern as for GET and POST requests. Here's an example:

            ```javascript
            const http = require('http');

            const server = http.createServer((req, res) => {
                if (req.method === 'DELETE') {
                    // Handle DELETE request
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('This is a DELETE request.');
                } else {
                    // Handle other HTTP methods
                    res.statusCode = 405;
                    res.setHeader('Allow', 'DELETE');
                    res.end('Method Not Allowed');
                }
            });

            server.listen(5000, 'localhost', () => {
                console.log('Server running on http://localhost:5000/');
            });
            ```

        With these examples, you can create a basic HTTP server in Node.js that handles GET, POST, and DELETE requests. Customize the request handling logic as needed for your specific application.
