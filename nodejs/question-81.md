
      
## question no: 82

## question : How do you handle GET requests in Node.js?

## answer: You can handle GET requests in Node.js by checking the request method and URL in the callback function of `http.createServer()`: `if (req.method === 'GET' && req.url === '/') { res.end('Hello, World!'); }`
      