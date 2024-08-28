
      
## question no: 115

## question : What is MongoDB's $eq operator?

## answer: $eq is a comparison operator in MongoDB that matches documents where the value of a specified field is equal to a given value. It is commonly used in queries to filter documents based on an exact match. For example, to find all documents where the 'status' field is 'active', you would use: db.collection.find({ status: { $eq: 'active' } }). While $eq is similar to simply specifying the field and value directly in a query, it is particularly useful in more complex queries or when combined with other operators. $eq is essential for scenarios requiring precise matches in MongoDB queries.
      