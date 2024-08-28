
      
## question no: 124

## question : What is MongoDB's $minN operator?

## answer: $minN is an aggregation operator in MongoDB used to return the minimum n elements from an array after sorting the array elements in ascending order. This operator is useful when you need to find the bottom n values from an array within a document. For example, to get the lowest 3 scores from a 'scores' array, you would use: db.collection.aggregate([{ $project: { bottomScores: { $minN: { input: '$scores', n: 3 } } } }]). $minN is particularly useful in scenarios where you want to identify the lowest values within an array, such as finding the least performing items or lowest scores in a dataset.
      