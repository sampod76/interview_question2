
      
## question no: 136

## question : What is MongoDB's $trunc operator?

## answer: $trunc is an operator in MongoDB's Aggregation Framework that truncates a numeric value to a specified number of decimal places without rounding. It is useful when you need to limit the precision of a number while ensuring that the value does not increase. For example, to truncate a 'price' field to two decimal places, you would use: db.collection.aggregate([{ $project: { truncatedPrice: { $trunc: ['$price', 2] } } }]). The $trunc operator is particularly useful in scenarios where you need to display or store numbers with reduced precision without rounding.
      