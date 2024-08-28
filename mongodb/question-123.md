
      
## question no: 123

## question : What is MongoDB's $maxN operator?

## answer: $maxN is an aggregation operator in MongoDB used to return the maximum n elements from an array after sorting the array elements in descending order. This operator is useful when you need to find the top n values from an array within a document. For example, to get the top 3 highest scores from a 'scores' array, you would use: db.collection.aggregate([{ $project: { topScores: { $maxN: { input: '$scores', n: 3 } } } }]). $maxN is particularly useful in scenarios where you want to identify the highest values within an array, such as finding the top-performing items or highest scores in a dataset.
      