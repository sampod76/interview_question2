
      
## question no: 138

## question : What is MongoDB's $floor operator?

## answer: $floor is an operator in MongoDB's Aggregation Framework that rounds a numeric value down to the nearest integer. It is useful when you need to ensure that a number is always rounded down. For example, to round down a 'price' field to the nearest whole number, you would use: db.collection.aggregate([{ $project: { roundedDownPrice: { $floor: '$price' } } }]). The $floor operator is particularly useful for scenarios where fractional values should be ignored, such as in inventory counts or when calculating minimum quantities.
      