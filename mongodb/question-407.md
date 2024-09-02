
      
## question no: 407

## question : How do you perform text search in Mongoose?

## answer: To perform text search in Mongoose, you need to create a text index on the fields you want to search and then use the `$text` query operator. For example: `User.find({ $text: { $search: 'John' } });`
      