
      
## question no: 598

## question : How do you create a TCP client in Node.js?

## answer: You can create a TCP client using the `net` module: `const net = require('net'); const client = net.createConnection({ port: 8080 }, () => { console.log('connected to server!'); client.write('Hello, server!'); });`
      