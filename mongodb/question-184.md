
      
## question no: 184

## question : What is MongoDB's $dateToString operator?

## answer: $dateToString is an operator in MongoDB's Aggregation Framework that converts a BSON Date object into a string based on a specified format. This operator is useful for formatting dates as strings for display or exporting data. For example, to convert a date field 'createdAt' into a string formatted as 'YYYY-MM-DD', you would use: db.collection.aggregate([{ $project: { dateStr: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } } } }]). The $dateToString operator is particularly useful in scenarios where you need to format date fields for presentation, reporting, or interoperability with systems that require date strings in a specific format.
      