
      
## question no: 47

## question : How do you verify a JWT in Node.js?

## answer: You can verify a JWT in Node.js using the `jsonwebtoken` library: `const jwt = require('jsonwebtoken'); jwt.verify(token, 'secret', (err, decoded) => { if (err) throw err; console.log(decoded); });`
      