
      
## question no: 122

## question : What is MongoDB's $nin operator?

## answer: $nin is a comparison operator in MongoDB that matches documents where the value of a specified field does not match any of the values in a provided array. It is the inverse of the $in operator. For example, to find all documents where the 'status' field is neither 'active' nor 'pending', you would use: db.collection.find({ status: { $nin: ['active', 'pending'] } }). The $nin operator is useful for filtering out multiple unwanted values in a single query, allowing you to exclude documents that match any of the specified criteria from your results.
      