
      
## question no: 303

## question : How do you add an element to an array in Mongoose?

## answer: Use Model.updateOne({ _id: id }, { $push: { arrayField: value } }).
      