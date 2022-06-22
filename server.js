const http = require('http');
const fs = require('fs')

const requestListener = function (_req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
    fs.readFile('index.html', function (_err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });
}

const server = http.createServer(requestListener);
server.listen(8080);