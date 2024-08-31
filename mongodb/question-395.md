
      
## question no: 395

## question : How do you create a custom validator in Mongoose?

## answer: You can create a custom validator in Mongoose by adding a `validate` option to the schema field. For example: `email: { type: String, validate: { validator: function(v) { return /.+@.+..+/.test(v); }, message: props => `${props.value} is not a valid email!` } }`
      