
      
## question no: 419

## question : What is the `expires` option in Mongoose?

## answer: The `expires` option in Mongoose is used to create TTL (Time to Live) indexes, which automatically delete documents after a specified number of seconds. For example: `createdAt: { type: Date, expires: '7d' }` will delete the document 7 days after `createdAt`.
      