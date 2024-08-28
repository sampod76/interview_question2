
      
## question no: 98

## question : What is MongoDB's $min operator?

## answer: $min is an operator in MongoDB's Aggregation Framework used to find the minimum value of a specified field within a group of documents. It is commonly used to determine the lowest value in a dataset, such as the minimum age, price, or score. For example, to find the minimum price in a collection, you would use: db.products.aggregate([{ $group: { _id: null, minPrice: { $min: '$price' } } }]). The $min operator is useful for identifying the lower bounds of a dataset, providing insights into the smallest values within a collection.
      