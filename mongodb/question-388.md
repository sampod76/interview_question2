
      
## question no: 388

## question : What are Mongoose instance methods?

## answer: Mongoose instance methods are methods that operate on individual documents. They are defined on the schema and can be called on document instances. For example: `userSchema.methods.sayHello = function() { return 'Hello ' + this.name; };`
      