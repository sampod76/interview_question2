
      
## question no: 116

## question : What is MongoDB's $type operator?

## answer: $type is an operator in MongoDB that allows you to query documents based on the BSON data type of a field. This operator is useful when you need to filter documents where a field contains a specific type, such as string, integer, array, or object. For example, to find all documents where the 'age' field is stored as a number, you would use: db.collection.find({ age: { $type: 'number' } }). The $type operator is particularly useful in scenarios where data consistency is important, or when you need to identify documents with fields of varying types.
      