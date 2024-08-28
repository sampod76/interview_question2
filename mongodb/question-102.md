
      
## question no: 102

## question : What is MongoDB's $first operator?

## answer: $first is an operator in MongoDB's Aggregation Framework used to return the first value of a specified field from the documents within a group. This operator is useful when you want to retrieve the first document's value according to the natural order of documents or after sorting within a group. For example, to get the first sale date for each product, you would use: db.sales.aggregate([{ $group: { _id: '$productId', firstSaleDate: { $first: '$saleDate' } } }]). The $first operator is particularly helpful in scenarios where the order of documents matters, such as in time series data or when identifying the initial entry within grouped data.
      