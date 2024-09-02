
      
## question no: 124

## question : How do you hash a string in Node.js?

## answer: You can hash a string using `crypto.createHash()`: `const crypto = require('crypto'); const hash = crypto.createHash('sha256').update('string').digest('hex');`
      