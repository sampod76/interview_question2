
      
## question no: 249

## question : How do you handle HTTP POST data in Node.js?

## answer: You can handle HTTP POST data by listening to the `data` and `end` events on the `req` object and accumulating the data: `let body = ''; req.on('data', chunk => body += chunk); req.on('end', () => { console.log(body); });`
      