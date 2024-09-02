
      
## question no: 46

## question : How do you generate a JWT in Node.js?

## answer: You can generate a JWT in Node.js using the `jsonwebtoken` library: `const jwt = require('jsonwebtoken'); const token = jwt.sign({ id: userId }, 'secret', { expiresIn: '1h' });`
      