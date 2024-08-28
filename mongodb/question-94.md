
      
## question no: 94

## question : What is MongoDB's $or operator?

## answer: $or is a logical operator in MongoDB used to combine multiple query conditions, where at least one of the specified conditions must be true for a document to be included in the result set. For example, to find documents where the 'status' is 'active' or the 'age' is greater than 30, you would use: db.collection.find({ $or: [{ status: 'active' }, { age: { $gt: 30 } }] }). $or is particularly useful when you need to retrieve documents that match any of several possible conditions, broadening your search criteria. It is an essential operator for scenarios where multiple alternative conditions should be considered in a query.
      