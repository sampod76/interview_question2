
      
## question no: 247

## question : What is MongoDB's $year operator?

## answer: $year is an operator in MongoDB's Aggregation Framework that extracts the year from a Date object. This operator is useful for performing operations or aggregations based on the year of a date. For example, to extract the year from a 'createdAt' date field, you would use: db.collection.aggregate([{ $project: { year: { $year: '$createdAt' } } }]). The $year operator is particularly useful in scenarios where data needs to be grouped or filtered based on the year, such as generating annual reports or analyzing yearly trends.
      