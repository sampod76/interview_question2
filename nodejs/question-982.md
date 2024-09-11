
      
## question no: 982

## question : How do you convert a buffer to JSON in Node.js?

## answer: You can convert a buffer to JSON in Node.js by first converting it to a string and then parsing it with `JSON.parse()`: `const jsonString = buffer.toString(); const jsonObj = JSON.parse(jsonString);`
      