
      
## question no: 409

## question : How do you create a TCP server in Node.js?

## answer: You can create a TCP server in Node.js using the `net` module: `const net = require('net'); const server = net.createServer((socket) => { socket.write('Hello!'); socket.end(); }); server.listen(3000);`
      