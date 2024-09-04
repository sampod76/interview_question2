
      
## question no: 380

## question : How do you handle 404 errors in Express.js?

## answer: You can handle 404 errors in Express.js by defining a middleware function that catches all unmatched routes: `app.use((req, res, next) => { res.status(404).send('Not Found'); });`
      