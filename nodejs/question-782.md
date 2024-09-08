
      
## question no: 782

## question : How do you create an HTTP server in Node.js?

## answer: You can create an HTTP server in Node.js using the `http` module: `const http = require('http'); const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); }); server.listen(3000, '127.0.0.1', () => { console.log('Server running at http://127.0.0.1:3000/'); });`
      