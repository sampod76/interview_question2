
      
## question no: 246

## question : What is MongoDB's $isoWeekYear operator?

## answer: $isoWeekYear is an operator in MongoDB's Aggregation Framework that extracts the ISO week year from a Date object. The ISO week year is a standard calendar year used in the ISO week date system. For example, to extract the ISO week year from a 'date' field, you would use: db.collection.aggregate([{ $project: { isoWeekYear: { $isoWeekYear: '$date' } } }]). The $isoWeekYear operator is useful for grouping or filtering data based on the ISO week year, especially when working with week-based reporting or analysis.
      