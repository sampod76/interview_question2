
      
## question no: 182

## question : What is MongoDB's $isoWeekYear operator?

## answer: $isoWeekYear is an operator in MongoDB's Aggregation Framework that extracts the ISO-8601 week-numbering year from a date field, which may differ from the calendar year for dates in early January or late December. This operator is useful for grouping or filtering documents by the ISO week year. For example, to extract the ISO week year from a 'createdAt' date field, you would use: db.collection.aggregate([{ $project: { isoWeekYear: { $isoWeekYear: '$createdAt' } } }]). The $isoWeekYear operator is particularly useful in scenarios where compliance with ISO-8601 week date standards is required, such as in financial reporting, academic year analysis, or global operations that need consistent week-year alignment.
      