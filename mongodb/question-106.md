
      
## question no: 106

## question : What is the purpose of MongoDB's $cond operator?

## answer: $cond is an operator in MongoDB's Aggregation Framework used to perform conditional evaluations, similar to an 'if-else' statement. This operator allows you to specify a condition, a value to return if the condition is true, and a value to return if the condition is false. For example, to categorize users as 'adult' or 'minor' based on their age, you would use: db.users.aggregate([{ $project: { ageCategory: { $cond: { if: { $gte: ['$age', 18] }, then: 'adult', else: 'minor' } } } }]). $cond is useful for introducing conditional logic into your aggregation pipelines, enabling more complex data transformations and analysis.
      