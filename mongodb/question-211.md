
      
## question no: 211

## question : What is MongoDB's $unset operator?

## answer: $unset is an operator in MongoDB used to remove one or more fields from a document. It is particularly useful when you need to clean up documents by deleting unnecessary or obsolete fields. For example, to remove the 'tempData' field from all documents, you would use: db.collection.updateMany({}, { $unset: { tempData: '' } }). The $unset operator is essential in scenarios where you need to maintain the cleanliness and relevance of your document structure, ensuring that documents only contain necessary and up-to-date information.
      