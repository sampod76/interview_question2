
      
## question no: 105

## question : What is the use of MongoDB's $unwind operator?

## answer: $unwind is an operator in MongoDB's Aggregation Framework that deconstructs an array field in each document and outputs a separate document for each element in the array. This operator is useful for breaking down arrays into individual elements, allowing for more detailed analysis or aggregation. For example, if a document contains an array of items, $unwind creates a separate document for each item in the array: db.orders.aggregate([{ $unwind: '$items' }]). $unwind is particularly useful in scenarios where you need to process or analyze elements within an array field individually, such as when dealing with embedded documents or nested data structures.
      