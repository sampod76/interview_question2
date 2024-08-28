
      
## question no: 92

## question : What is MongoDB's $sort operator?

## answer: $sort is an operator in MongoDB used to order documents in a specified sequence, either ascending or descending. It is commonly used in aggregation pipelines and find queries to control the order of the results. For example, to sort documents by 'createdAt' in descending order, you would use: db.collection.find().sort({ createdAt: -1 }). In an aggregation pipeline, $sort is often used after stages like $match to sort the filtered documents before further processing. Sorting is crucial when you need to present data in a particular order, such as retrieving the most recent entries or ranking items based on a certain criterion. $sort is an essential tool for managing the order of query results in MongoDB.
      