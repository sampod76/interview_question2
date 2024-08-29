
      
## question no: 195

## question : What is MongoDB's $filter operator?

## answer: $filter is an operator in MongoDB's Aggregation Framework that filters elements in an array based on a specified condition, returning a new array with only the elements that match the condition. This operator is useful when you need to create a subset of an array based on specific criteria. For example, to filter an array of scores to include only those greater than 80, you would use: db.collection.aggregate([{ $project: { highScores: { $filter: { input: '$scores', as: 'score', cond: { $gt: ['$$score', 80] } } } } }]). $filter is essential for scenarios where you need to refine arrays by excluding elements that do not meet certain conditions.
      