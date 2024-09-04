
      
## question no: 367

## question : How do you read a file synchronously in Node.js?

## answer: You can read a file synchronously in Node.js using `fs.readFileSync()`, which blocks the event loop until the file is read: `const data = fs.readFileSync('file.txt', 'utf8');`
      