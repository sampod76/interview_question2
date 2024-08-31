
      
## question no: 418

## question : How do you add a custom method to a Mongoose model?

## answer: To add a custom method to a Mongoose model, you can define the method on the schema's `methods` object. For example: `userSchema.methods.sayHello = function() { return 'Hello ' + this.name; };`
      