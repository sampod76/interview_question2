
      
## question no: 411

## question : How do you update a subdocument in Mongoose?

## answer: To update a subdocument in Mongoose, you need to retrieve the parent document, modify the subdocument, and then save the parent document. For example: `const user = await User.findById(userId); user.address.city = 'New York'; await user.save();`
      