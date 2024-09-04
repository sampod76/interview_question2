
      
## question no: 370

## question : How do you create a directory synchronously in Node.js?

## answer: You can create a directory synchronously using `fs.mkdirSync()`, which blocks the event loop until the directory is created: `fs.mkdirSync('path/to/dir');`
      