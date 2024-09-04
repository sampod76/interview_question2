
      
## question no: 361

## question : How do you write JSON data to a file in Node.js?

## answer: You can write JSON data to a file in Node.js using `fs.writeFile()` and `JSON.stringify()` to convert the object to a JSON string: `fs.writeFile('file.json', JSON.stringify(data), (err) => { if (err) throw err; });`
      