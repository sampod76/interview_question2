
      
## question no: 1729

## question : How do you create a TCP client in Node.js?

## answer: You can create a TCP client in Node.js using the `net` module: `const net = require('net'); const client = net.createConnection({ port: 8080 }, () => { console.log('connected to server!'); client.write('Hello, server!'); });`
      