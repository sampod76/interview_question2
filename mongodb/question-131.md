
      
## question no: 131

## question : What is MongoDB's $toLower operator?

## answer: $toLower is an operator in MongoDB's Aggregation Framework that converts a string to lowercase. It is useful when you need to normalize text data for case-insensitive comparisons or standardization. For example, to convert a 'name' field to lowercase, you would use: db.collection.aggregate([{ $project: { lowerCaseName: { $toLower: '$name' } } }]). The $toLower operator is particularly useful in scenarios where consistent casing is required, such as when performing case-insensitive searches or comparisons.
      