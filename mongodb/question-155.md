
      
## question no: 155

## question : What is MongoDB's $regexFindAll operator?

## answer: $regexFindAll is an operator in MongoDB's Aggregation Framework that searches a string field for all matches against a specified regular expression and returns an array of all matches found. This operator is useful when you need to extract multiple patterns from text data. For example, to find all occurrences of digit sequences in a 'description' field, you would use: db.collection.aggregate([{ $project: { allMatches: { $regexFindAll: { input: '$description', regex: '\d+' } } } }]). The $regexFindAll operator is particularly useful in scenarios where multiple instances of a pattern need to be identified, such as in data extraction or validation tasks.
      