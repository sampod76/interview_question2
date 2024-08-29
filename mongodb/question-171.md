
      
## question no: 171

## question : What is MongoDB's $year operator?

## answer: $year is an operator in MongoDB's Aggregation Framework that extracts the year from a date field. This operator is useful when you need to group or filter documents by year. For example, to extract the year from a 'createdAt' date field, you would use: db.collection.aggregate([{ $project: { year: { $year: '$createdAt' } } }]). The $year operator is particularly useful in scenarios involving time-based analysis, such as yearly reports, trends analysis, or when working with time series data where grouping by year is necessary.
      