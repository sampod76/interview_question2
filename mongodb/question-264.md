
      
## question no: 264

## question : What is MongoDB's $graphLookup operator? 

## answer: $graphLookup is an operator in MongoDB's Aggregation Framework that performs a recursive search on a collection, enabling graph-based queries. It is useful for traversing hierarchical or network-like data structures. For example, to recursively find all employees under a specific manager in an 'employees' collection, you would use: db.employees.aggregate([{ $graphLookup: { from: 'employees', startWith: '$managerId', connectFromField: 'managerId', connectToField: '_id', as: 'subordinates' } }]). The $graphLookup operator is particularly useful for complex hierarchical queries and exploring relationships within graph-like data.
      