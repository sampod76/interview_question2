
      
## question no: 141

## question : How do you create a simple HTTP server in Node.js?

## answer: You can create a simple HTTP server using the `http` module: `const http = require('http'); const server = http.createServer((req, res) => { res.end('Hello, World!'); }); server.listen(3000);`
      