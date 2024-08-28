
      
## question no: 93

## question : What is the use of MongoDB's $and operator?

## answer: $and is a logical operator in MongoDB used to combine multiple query conditions, ensuring that all specified conditions must be true for a document to be included in the result set. For example, to find documents where the 'status' is 'active' and the 'age' is greater than 30, you would use: db.collection.find({ $and: [{ status: 'active' }, { age: { $gt: 30 } }] }). While MongoDB implicitly applies an AND operation when multiple conditions are specified in a single query object, $and is explicitly required when combining conditions on the same field or when used with other logical operators. $and is essential for crafting precise queries that need to satisfy multiple criteria.
      