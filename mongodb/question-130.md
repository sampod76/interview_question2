
      
## question no: 130

## question : What is MongoDB's $ifNull operator?

## answer: $ifNull is an operator in MongoDB's Aggregation Framework that returns a specified value if the input value is null or missing. It is useful for providing default values or handling cases where fields may be absent. For example, to return 'Unknown' if the 'status' field is null, you would use: db.collection.aggregate([{ $project: { status: { $ifNull: ['$status', 'Unknown'] } } }]). The $ifNull operator is particularly useful in scenarios where you want to ensure that your output does not contain null values, providing a fallback value in case the field is missing or null.
      