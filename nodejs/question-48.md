
      
## question no: 49

## question : How do you create a route with parameters in Express.js?

## answer: You can create a route with parameters in Express.js by defining a route with `:` followed by the parameter name: `app.get('/users/:id', (req, res) => { res.send(req.params.id); });`
      