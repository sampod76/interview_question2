
      
## question no: 70

## question : How do you compress a file in Node.js?

## answer: You can compress a file in Node.js using the `zlib` module: `const zlib = require('zlib'); const fs = require('fs'); const gzip = zlib.createGzip(); const input = fs.createReadStream('file.txt'); const output = fs.createWriteStream('file.txt.gz'); input.pipe(gzip).pipe(output);`
      