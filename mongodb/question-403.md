
      
## question no: 403

## question : How do you perform pagination in Mongoose?

## answer: Pagination in Mongoose can be achieved using the `limit()` and `skip()` methods on a query. For example: `User.find().limit(10).skip(20);` will retrieve the third page of results if each page contains 10 documents.
      