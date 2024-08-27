
      
## question no: 72

## question : What is MongoDB's GridFS?

## answer: GridFS is a specification for storing and retrieving large files in MongoDB that exceed the BSON document size limit of 16 MB. GridFS works by dividing a large file into smaller chunks and storing each chunk as a separate document within a special 'chunks' collection. The metadata for each file, such as its name, size, and upload date, is stored in a separate 'files' collection. GridFS is particularly useful for applications that need to handle large files like videos, images, and backups. When a file is uploaded to GridFS, it is divided into chunks of a specified size, typically 255 KB by default. Each chunk is stored as a separate document, and the file's metadata is stored in the 'files' collection, which includes references to the associated chunks. When retrieving a file, GridFS reassembles the chunks in the correct order and streams the file to the client. This streaming capability is particularly useful for serving large files, as it allows them to be read and sent in smaller, more manageable pieces. GridFS is fully integrated with MongoDB's sharding and replication features, making it a scalable and reliable solution for managing large files in distributed environments.
      