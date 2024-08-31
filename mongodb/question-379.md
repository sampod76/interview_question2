
      
## question no: 379

## question : How do you perform a validation in Mongoose?

## answer: Mongoose provides built-in validators for schema types, such as `required`, `min`, `max`, `enum`, and `match`. You can define these validators in the schema. For example: `email: { type: String, required: true, match: /.+@.+..+/ }`
      