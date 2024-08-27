
      
## question no: 70

## question : What is the use of $min and $max in MongoDB?

## answer: The $min and $max operators in MongoDB are used in update operations to conditionally update a field to a new value based on comparisons with the existing value. Specifically, $min updates a field to the specified value only if the current value is greater than the specified value, while $max updates a field only if the current value is less than the specified value. These operators are useful for scenarios where you need to maintain a minimum or maximum value in a field. For example, if you want to update a user's 'score' only if the new score is lower than the existing score, you would use $min: db.users.updateOne({ _id: userId }, { $min: { score: newScore } }). This ensures that the score is updated only if the new score is lower, which might be useful in applications where you track the lowest score or earliest date. Similarly, $max is used to ensure a field is updated only if the new value is greater. For example, to track the highest price a product has been sold for, you might use: db.products.updateOne({ _id: productId }, { $max: { highestPrice: newPrice } }). These operators provide a straightforward way to enforce constraints on field values, ensuring that data integrity is maintained according to specific business rules.
      