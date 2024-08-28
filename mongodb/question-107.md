
      
## question no: 107

## question : What is MongoDB's $arrayElemAt operator?

## answer: $arrayElemAt is an operator in MongoDB's Aggregation Framework used to return the element at a specified position in an array. This operator is useful for accessing specific elements within an array when their position is known. For example, to retrieve the second item from an array field 'items', you would use: db.collection.aggregate([{ $project: { secondItem: { $arrayElemAt: ['$items', 1] } } }]). $arrayElemAt is particularly useful in scenarios where you need to extract a specific element from an array, such as retrieving the first or last item or accessing elements by index.
      