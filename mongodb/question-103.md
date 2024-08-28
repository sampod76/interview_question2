
      
## question no: 103

## question : What is MongoDB's $last operator?

## answer: $last is an operator in MongoDB's Aggregation Framework used to return the last value of a specified field from the documents within a group. This operator is useful for retrieving the last document's value according to the natural order of documents or after sorting within a group. For example, to get the last sale date for each product, you would use: db.sales.aggregate([{ $group: { _id: '$productId', lastSaleDate: { $last: '$saleDate' } } }]). The $last operator is particularly useful in scenarios where the most recent entry within a group is required, such as finding the latest transaction or the last recorded value in time series data.
      