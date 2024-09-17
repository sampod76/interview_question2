
      
## question no: 1460

## question : How do you create a TCP server in Node.js?

## answer: You can create a TCP server in Node.js using the `net` module: `const net = require('net'); const server = net.createServer(socket => { socket.write('Hello, client!'); socket.end(); }); server.listen(3000);`
      