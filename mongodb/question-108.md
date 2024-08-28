
      
## question no: 108

## question : What is MongoDB's $filter operator?

## answer: $filter is an operator in MongoDB's Aggregation Framework used to filter elements in an array based on a specified condition. This operator returns a new array that contains only the elements that match the condition. For example, to filter an array of scores to include only those greater than 80, you would use: db.collection.aggregate([{ $project: { highScores: { $filter: { input: '$scores', as: 'score', cond: { $gt: ['$$score', 80] } } } } }]). $filter is useful when you need to create a subset of an array based on specific criteria, allowing for more precise data analysis and transformation within MongoDB.
      