
      
## question no: 392

## question : How do you reference another collection in Mongoose?

## answer: You can reference another collection in Mongoose using the `ref` option in the schema. For example: `userSchema = new mongoose.Schema({ name: String, role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' } });`
      