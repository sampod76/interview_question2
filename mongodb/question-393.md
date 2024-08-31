
      
## question no: 393

## question : How do you perform aggregation in Mongoose?

## answer: Aggregation in Mongoose is performed using the `aggregate()` method, which allows you to run MongoDB aggregation pipelines on your collections. For example: `User.aggregate([{ $match: { age: { $gte: 18 } } }, { $group: { _id: '$age', count: { $sum: 1 } } }]);`
      