
      
## question no: 180

## question : What is MongoDB's $isoDayOfWeek operator?

## answer: $isoDayOfWeek is an operator in MongoDB's Aggregation Framework that extracts the ISO-8601 day of the week from a date field, returning an integer between 1 (Monday) and 7 (Sunday). This operator is useful for grouping or filtering documents according to the ISO week date system. For example, to extract the ISO day of the week from a 'createdAt' date field, you would use: db.collection.aggregate([{ $project: { isoDayOfWeek: { $isoDayOfWeek: '$createdAt' } } }]). The $isoDayOfWeek operator is particularly useful in scenarios involving international standards for date and time, or when aligning data with ISO-8601 week conventions for analysis.
      