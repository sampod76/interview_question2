
      
## question no: 496

## question : How do you serve HTML files in Express.js?

## answer: You can serve HTML files in Express.js using `res.sendFile()` to send the HTML file as a response: `app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); });`
      