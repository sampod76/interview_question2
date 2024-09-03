
      
## question no: 115

## question : How do you create an HTTP server in Node.js?

## answer: You can create an HTTP server using `http.createServer()`: `const http = require('http'); const server = http.createServer((req, res) => { res.end('Hello World'); }); server.listen(3000);`
      