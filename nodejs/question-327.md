
      
## question no: 327

## question : How do you create a hash in Node.js?

## answer: You can create a hash using the `crypto.createHash()` method: `const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('data').digest('hex');`
      