
      
## question no: 96

## question : What is MongoDB's $lookup operator?

## answer: $lookup is a stage in MongoDB's Aggregation Framework used to perform a left outer join between two collections. This operator allows you to combine data from different collections into a single query result. For example, to join an 'orders' collection with a 'customers' collection based on a matching 'customerId', you would use: db.orders.aggregate([{ $lookup: { from: 'customers', localField: 'customerId', foreignField: '_id', as: 'customerDetails' } }]). $lookup adds the joined data as an array field to each document in the original collection, making it a powerful tool for working with relational data models in MongoDB.
      