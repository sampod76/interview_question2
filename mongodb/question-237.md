
      
## question no: 237

## question : What is MongoDB's $substrCP operator?

## answer: $substrCP is an operator in MongoDB's Aggregation Framework that extracts a substring from a string field based on character positions, counting Unicode code points. This operator is useful for accurately handling substrings in multilingual contexts. For example, to extract a substring starting at code point position 5 with a length of 10 characters from a field 'text', you would use: db.collection.aggregate([{ $project: { partText: { $substrCP: ['$text', 5, 10] } } }]). The $substrCP operator is particularly useful in scenarios where Unicode characters are involved, ensuring correct extraction of characters irrespective of their byte size.
      