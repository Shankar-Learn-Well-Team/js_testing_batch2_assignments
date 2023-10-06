const http = require('http');

function startServer() {
    const server = http.createServer((req, res) => {
        try {
            if (req.url === '/user') {
                if (req.method === 'GET') {
                    // Handle GET request for /user
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    const responseObject = {
                        message: 'This is a GET request for /user.',
                    };
                    res.end(JSON.stringify(responseObject));
                } else if (req.method === 'POST') {
                    // Handle POST request for /user
                    let requestData = '';

                    req.on('data', (chunk) => {
                        requestData += chunk;
                    });

                    req.on('end', () => {
                        const requestObject = JSON.parse(requestData);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        const responseObject = { receivedData: requestObject };
                        res.end(JSON.stringify(responseObject));
                    });
                } else {
                    // Handle other HTTP methods for /user
                    res.statusCode = 405;
                    res.setHeader('Allow', 'GET, POST');
                    res.end('Method Not Allowed');
                }
            } else {
                // Handle other URL paths
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                const responseObject = { message: 'Not Found' };
                res.end(JSON.stringify(responseObject));
            }
        } catch (error) {
            console.error('Server error:', error);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
        }
    });

    server.listen(5000, 'localhost', () => {
        console.log('Server running on http://localhost:5000/');
    });
}

startServer();