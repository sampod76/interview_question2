
      
## question no: 132

## question : What is MongoDB's $toUpper operator?

## answer: $toUpper is an operator in MongoDB's Aggregation Framework that converts a string to uppercase. It is commonly used to standardize text data or prepare it for case-insensitive comparisons. For example, to convert a 'city' field to uppercase, you would use: db.collection.aggregate([{ $project: { upperCaseCity: { $toUpper: '$city' } } }]). The $toUpper operator is useful in scenarios where you need to ensure that text is consistently formatted in uppercase, such as when comparing or sorting text values in a case-insensitive manner.
      