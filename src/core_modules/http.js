const http = require('http');

function startServer() {
    const server = http.createServer((req, res) => {
        try {
            if (req.method === 'GET') {
                // Handle GET request
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                const responseObject = { message: 'This is a GET request.' };
                res.end(JSON.stringify(responseObject));
            } else if (req.method === 'POST') {
                // Handle POST request
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
            } else if (req.method === 'PUT') {
                // Handle PUT request
                let requestData = '';

                req.on('data', (chunk) => {
                    requestData += chunk;
                });

                req.on('end', () => {
                    const requestObject = JSON.parse(requestData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    const responseObject = { updatedData: requestObject };
                    res.end(JSON.stringify(responseObject));
                });
            } else if (req.method === 'PATCH') {
                // Handle PATCH request
                let requestData = '';

                req.on('data', (chunk) => {
                    requestData += chunk;
                });

                req.on('end', () => {
                    const requestObject = JSON.parse(requestData);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    const responseObject = { patchedData: requestObject };
                    res.end(JSON.stringify(responseObject));
                });
            } else if (req.method === 'DELETE') {
                // Handle DELETE request
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                const responseObject = { message: 'This is a DELETE request.' };
                res.end(JSON.stringify(responseObject));
            } else {
                // Handle other HTTP methods
                res.statusCode = 405;
                res.setHeader('Allow', 'GET, POST, PUT, PATCH, DELETE');
                res.end('Method Not Allowed');
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
