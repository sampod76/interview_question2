
      
## question no: 181

## question : What is MongoDB's $isoWeek operator?

## answer: $isoWeek is an operator in MongoDB's Aggregation Framework that extracts the ISO-8601 week number from a date field, where the first week of the year is the one containing the first Thursday. This operator is useful for grouping or filtering documents by ISO week numbers. For example, to extract the ISO week number from a 'createdAt' date field, you would use: db.collection.aggregate([{ $project: { isoWeek: { $isoWeek: '$createdAt' } } }]). The $isoWeek operator is particularly useful in scenarios involving international standards for week numbering, such as in global reporting systems, financial year analysis, or any application that requires alignment with ISO-8601 week conventions.
      