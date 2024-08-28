
      
## question no: 91

## question : What is the difference between $addToSet and $push in MongoDB?

## answer: Both $addToSet and $push are used to add elements to an array in MongoDB. However, $push adds the specified element to the array regardless of whether it already exists, which can result in duplicates. For example: db.users.updateOne({ _id: userId }, { $push: { tags: 'newTag' } }). On the other hand, $addToSet adds the element only if it does not already exist in the array, ensuring that the array contains unique values: db.users.updateOne({ _id: userId }, { $addToSet: { tags: 'newTag' } }). Use $addToSet when you want to prevent duplicates, and $push when adding elements unconditionally.
      