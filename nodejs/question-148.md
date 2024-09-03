
      
## question no: 148

## question : How do you make an HTTP GET request in Node.js?

## answer: You can make an HTTP GET request using the `http` or `https` module: `const http = require('http'); http.get('http://example.com', (res) => { res.on('data', (chunk) => { console.log(chunk.toString()); }); });`
      