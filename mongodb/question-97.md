
      
## question no: 97

## question : What is the use of MongoDB's $max operator?

## answer: $max is an operator in MongoDB's Aggregation Framework used to find the maximum value of a specified field within a group of documents. It is commonly used in aggregation pipelines to determine the highest value in a dataset, such as the highest score, salary, or price. For example, to find the maximum salary in a collection, you would use: db.employees.aggregate([{ $group: { _id: null, maxSalary: { $max: '$salary' } } }]). The $max operator is essential for summarizing data and extracting key statistics within MongoDB, providing insights into the upper bounds of a dataset.
      