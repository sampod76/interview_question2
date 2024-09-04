
      
## question no: 378

## question : How do you create a simple web server using Node.js?

## answer: You can create a simple web server using the `http` module: `const http = require('http'); const server = http.createServer((req, res) => { res.end('Hello, World!'); }); server.listen(3000);`
      