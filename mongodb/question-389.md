
      
## question no: 389

## question : What are Mongoose static methods?

## answer: Mongoose static methods are methods that operate on the model itself rather than individual documents. They are defined on the schema's `statics` object. For example: `userSchema.statics.findByEmail = function(email) { return this.findOne({ email }); };`
      