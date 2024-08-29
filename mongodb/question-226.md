
      
## question no: 226

## question : What is MongoDB's $substr operator?

## answer: $substr is an operator in MongoDB's Aggregation Framework that extracts a substring from a string field, starting at a specified position and spanning a given number of characters. This operator is useful when you need to manipulate or extract specific portions of a string. For example, to extract a substring starting at index 5 and spanning 10 characters from a field 'text', you would use: db.collection.aggregate([{ $project: { subText: { $substr: ['$text', 5, 10] } } }]). The $substr operator is particularly useful in scenarios where you need to work with or format substrings, such as truncating text or extracting specific data segments.
      