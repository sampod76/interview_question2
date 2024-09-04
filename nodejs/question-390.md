
      
## question no: 390

## question : How do you generate a random string in Node.js?

## answer: You can generate a random string using the `crypto` module: `const crypto = require('crypto'); const randomString = crypto.randomBytes(16).toString('hex');`
      