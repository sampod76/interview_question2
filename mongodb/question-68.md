
      
## question no: 68

## question : What is MongoDB's TTL index?

## answer: A TTL (Time-To-Live) index in MongoDB is a special type of index that automatically removes documents from a collection after a specified period. This feature is particularly useful for managing collections where data is only relevant for a certain duration, such as session data, logs, or temporary records. When you create a TTL index on a date field, MongoDB will automatically delete documents once the specified time has passed since the date in that field. To create a TTL index, you use the expireAfterSeconds option when creating the index. For example, to automatically delete documents 30 days after their 'createdAt' timestamp, you would use: db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 2592000 }). In this example, 2592000 seconds is equivalent to 30 days. TTL indexes are managed by a background thread in MongoDB, which periodically scans the indexed documents and removes those that have expired. This process is efficient and ensures that old data is automatically cleaned up without requiring manual intervention. TTL indexes are ideal for applications where data expiration is a natural part of the data lifecycle, allowing you to keep collections lean and focused on the most relevant data.
      