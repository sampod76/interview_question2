
      
## question no: 420

## question : How do you generate a SHA-256 hash in Node.js?

## answer: You can generate a SHA-256 hash using the `crypto` module: `const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('data').digest('hex');`
      