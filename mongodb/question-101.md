
      
## question no: 101

## question : What is MongoDB's $sum operator?

## answer: $sum is an operator in MongoDB's Aggregation Framework used to calculate the total sum of numeric values within a group of documents. This operator is often used in aggregation pipelines to compute the total of a particular field, such as total sales, total revenue, or total quantity. For example, to sum the total sales amount in a collection, you would use: db.sales.aggregate([{ $group: { _id: null, totalSales: { $sum: '$amount' } } }]). The $sum operator can also be used to count documents by summing the value '1' for each document, providing a way to count documents that meet specific criteria. It is a powerful tool for generating aggregate totals directly within MongoDB.
      