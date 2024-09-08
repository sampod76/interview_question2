
      
## question no: 742

## question : How do you read a JSON file in Node.js?

## answer: You can read a JSON file in Node.js using `fs.readFile()` and then parsing the content with `JSON.parse()`: `fs.readFile('file.json', 'utf8', (err, data) => { const jsonData = JSON.parse(data); });`
      