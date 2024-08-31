
      
## question no: 377

## question : How do you use pre-save middleware in Mongoose?

## answer: You can use pre-save middleware in Mongoose by defining a `pre()` method on the schema. For example: `userSchema.pre('save', function(next) { this.updatedAt = Date.now(); next(); });`
      