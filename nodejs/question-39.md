
      
## question no: 40

## question : How do you hash a string in Node.js?

## answer: You can hash a string using the `crypto` module: `const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('string').digest('hex');`
      