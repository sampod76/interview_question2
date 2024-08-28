
      
## question no: 100

## question : What is MongoDB's $avg operator?

## answer: $avg is an operator in MongoDB's Aggregation Framework used to calculate the average value of a specified field within a group of documents. This operator is useful when you need to determine the mean value of numeric fields, such as the average age of users, the average price of products, or the average score in an exam. For example, to calculate the average price of all products in a collection, you would use: db.products.aggregate([{ $group: { _id: null, avgPrice: { $avg: '$price' } } }]). The $avg operator is essential for statistical analysis within MongoDB, providing insights into the central tendency of data. By using $avg, you can efficiently calculate averages within your datasets without needing to export the data for external processing.
      