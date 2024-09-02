
      
## question no: 72

## question : How do you convert a callback function to return a Promise in Node.js?

## answer: You can convert a callback function to return a Promise using `util.promisify()`: `const util = require('util'); const fs = require('fs'); const readFile = util.promisify(fs.readFile);`
      