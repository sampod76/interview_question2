
      
## question no: 201

## question : What is MongoDB's $type operator?

## answer: $type is an operator in MongoDB that returns the BSON type of a field or expression. This operator is useful when you need to ensure that a field has a specific data type or when filtering documents based on data type. For example, to find all documents where the 'age' field is of type 'int', you would use: db.collection.find({ age: { $type: 'int' } }). The $type operator is particularly useful in scenarios where data type consistency is important, such as in data validation, query optimization, or when working with fields that can contain multiple types (e.g., numbers and strings).
      