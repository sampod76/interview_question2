
      
## question no: 121

## question : What is MongoDB's $ne operator?

## answer: $ne is a comparison operator in MongoDB that matches documents where the value of a specified field is not equal to a given value. It is used in queries to exclude documents that match a particular value. For example, to find all documents where the 'status' field is not 'active', you would use: db.collection.find({ status: { $ne: 'active' } }). The $ne operator is particularly useful in scenarios where you want to filter out specific values from your results, ensuring that only documents with differing values are included in the query results.
      