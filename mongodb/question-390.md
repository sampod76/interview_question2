
      
## question no: 390

## question : How do you handle nested schemas in Mongoose?

## answer: Nested schemas in Mongoose are handled by embedding one schema within another. For example: `const addressSchema = new mongoose.Schema({ street: String, city: String }); const userSchema = new mongoose.Schema({ name: String, address: addressSchema });`
      