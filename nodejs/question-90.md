
      
## question no: 91

## question : How do you use a template engine in Express.js?

## answer: You can use a template engine in Express.js by setting the view engine and rendering views: `app.set('view engine', 'ejs'); app.get('/', (req, res) => { res.render('index', { title: 'Home' }); });`
      