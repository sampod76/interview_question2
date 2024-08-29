
      
## question no: 262

## question : What is MongoDB's $sample operator?

## answer: $sample is an operator in MongoDB's Aggregation Framework that randomly selects a specified number of documents from a collection. It is useful for generating random samples of data for testing, analysis, or visualization. For example, to select 10 random documents from a collection, you would use: db.collection.aggregate([{ $sample: { size: 10 } }]). The $sample operator is particularly useful for creating random subsets of data, conducting sampling-based analysis, or when you need to work with a representative subset of a larger dataset.
      