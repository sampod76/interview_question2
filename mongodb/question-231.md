
      
## question no: 231

## question : What is MongoDB's $substr operator?

## answer: $substr is an operator in MongoDB's Aggregation Framework that extracts a substring from a string field, starting at a specified position and spanning a specified number of characters. This operator is useful for manipulating or displaying parts of strings. For example, to extract a substring starting at position 5 with a length of 10 characters from a field 'description', you would use: db.collection.aggregate([{ $project: { shortDesc: { $substr: ['$description', 5, 10] } } }]). The $substr operator is particularly useful in scenarios where you need to format strings, extract portions for display, or process text data by breaking it into smaller segments.
      