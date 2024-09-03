
      
## question no: 157

## question : How do you create a child process in Node.js?

## answer: You can create a child process using the `child_process` module: `const { exec } = require('child_process'); exec('ls', (err, stdout, stderr) => { console.log(stdout); });`
      