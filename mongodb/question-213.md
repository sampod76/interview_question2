
      
## question no: 213

## question : What is MongoDB's $indexOfArray operator?

## answer: $indexOfArray is an operator in MongoDB's Aggregation Framework that returns the index of the first occurrence of a specified element in an array. If the element is not found, it returns -1. This operator is useful for locating the position of elements within arrays. For example, to find the index of 'value' in an array 'items', you would use: db.collection.aggregate([{ $project: { index: { $indexOfArray: ['$items', 'value'] } } }]). The $indexOfArray operator is particularly useful in scenarios where you need to determine the position of an element within an array, such as when performing conditional logic based on array content.
      