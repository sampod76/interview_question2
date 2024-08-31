
      
## question no: 420

## question : How do you create a compound index in Mongoose?

## answer: To create a compound index in Mongoose, you can use the `index()` method on the schema and pass an object with multiple fields. For example: `userSchema.index({ name: 1, email: -1 });` will create an index on `name` and `email`.
      