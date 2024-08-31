
      
## question no: 381

## question : What is a virtual property in Mongoose?

## answer: Virtual properties are properties that are not stored in the MongoDB document but can be computed or set on the fly. They are defined using `schema.virtual()`. For example, `userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`
      