
      
## question no: 528

## question : How do you create a custom middleware in Express.js?

## answer: You can create custom middleware in Express.js by defining a function that takes `req`, `res`, and `next` as arguments, then using `app.use()` to mount it: `app.use((req, res, next) => { console.log('Custom middleware'); next(); });`
      