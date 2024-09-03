
      
## question no: 242

## question : How do you create a simple web server using Express.js?

## answer: You can create a simple web server using Express.js by initializing an Express app and defining a route: `const express = require('express'); const app = express(); app.get('/', (req, res) => res.send('Hello World!')); app.listen(3000, () => console.log('Server running on port 3000'));`
      