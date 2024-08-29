
      
## question no: 304

## question : How do you remove an element from an array in Mongoose?

## answer: Use Model.updateOne({ _id: id }, { $pull: { arrayField: value } }).
      