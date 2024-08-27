
      
## question no: 77

## question : What is the difference between $set and $unset in MongoDB?

## answer: In MongoDB, $set and $unset are operators used in update operations to modify documents by adding, updating, or removing fields. The $set operator is used to add a new field or update the value of an existing field in a document. If the field does not exist, $set will create it. For example, to set the 'status' field to 'active' in a user document, you would use: db.users.updateOne({ _id: userId }, { $set: { status: 'active' } }). This command either updates the 'status' field if it exists or adds it if it doesn't. On the other hand, the $unset operator is used to remove a field from a document. For example, to remove the 'status' field from a document, you would use: db.users.updateOne({ _id: userId }, { $unset: { status: '' } }). This command deletes the 'status' field from the document. The $unset operator is particularly useful when you want to clean up documents by removing unnecessary or obsolete fields. In summary, $set is used to add or update fields, while $unset is used to remove fields, allowing you to modify the structure and content of your MongoDB documents as needed.
      