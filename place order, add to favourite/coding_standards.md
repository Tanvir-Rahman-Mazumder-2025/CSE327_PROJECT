# Coding Standards - Bookstore Project

## 1. Consistency
Maintain uniform coding style across all files to enhance readability and maintainability. Consistent code reduces cognitive load and makes collaboration easier.

```javascript
// ❌ Current inconsistent naming
const user_id = dummyUser._id;
const book_id = req.body.bookId;

// ✅ Consistent camelCase
const userId = dummyUser._id;
const bookId = req.body.bookId;
```

## 2. Naming Conventions

### 2.1 Variables & Functions (camelCase)
Use descriptive names that clearly indicate purpose. Avoid abbreviations and single letters except for loop counters.

```javascript
// ✅ Good: Clear, descriptive names
const quantityNum = Number(quantity) || 1;
export const addToCart = async (req, res) => {
```

### 2.2 Constants (UPPERCASE_SNAKE_CASE)
Constants should be declared at the top of files and use descriptive names that indicate their immutable nature.

```javascript
// ✅ Add to your project
const DEFAULT_PAYMENT_METHOD = 'COD';
const MAX_CART_ITEMS = 50;
```

### 2.3 Files & Routes (kebab-case)
File names should be lowercase with hyphens, making them easy to read and type in URLs.

```javascript
// ✅ Current good examples
'../controllers/addToCart.js'
app.use('/api/book', bookRoute);
```

## 3. Import Organization
Group imports logically to make dependencies clear and maintainable. This helps identify external vs internal dependencies quickly.

```javascript
// Built-in modules first
import express from 'express';
// Third-party packages
import dotenv from 'dotenv';
// Local modules last
import dummyUser from '../dummyuser.js';
```

## 4. Error Handling
Proper error handling prevents application crashes and provides meaningful feedback to users and developers.

### 4.1 Try-Catch Blocks
Always wrap async operations in try-catch blocks and provide specific error messages.

```javascript
// ❌ Current generic error
res.status(500).json({message:'Internal Server Error hi i am from addFavourite controller'});

// ✅ Specific, professional error
res.status(500).json({ message: 'Failed to add book to favourites' });
```

### 4.2 Error Logging
Log errors with context to help with debugging while keeping user-facing messages clean.

```javascript
console.error('Error in addFavourite:', error.message);
```

## 5. Input Validation
Always validate user inputs to prevent errors and security vulnerabilities. This is crucial for data integrity and application security.

### 5.1 Required Field Validation
Check for required fields before processing to provide early feedback.

```javascript
// ✅ Add to placeOrder controller
if (!phone || !street || !city || !state || !zip_code || !country) {
    return res.status(400).json({ message: "Missing required address information" });
}
```

### 5.2 Data Type Validation
Convert and validate data types to ensure consistency.

```javascript
// ✅ Current good example
const quantityNum = Number(quantity) || 1;
```

## 6. Database Operations
Follow consistent patterns for database queries to ensure reliability and performance.

### 6.1 Existence Checks
Always verify that referenced documents exist before performing operations.

```javascript
// ✅ Add to your controllers
const book = await Book.findById(book_id);
if (!book) return res.status(404).json({ message: "Book not found" });
```

### 6.2 Population Patterns
Use consistent population to avoid N+1 queries and improve performance.

```javascript
// ✅ Current good example
const cart = await Cart.findOne({ user_id }).populate('items.book_id');
```

## 7. Function Documentation
Use JSDoc comments for functions to describe parameters, return values, and behavior. This helps other developers understand code quickly.

```javascript
/**
 * Adds a book to user's shopping cart or updates quantity if exists
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const addToCart = async (req, res) => {
```

## 8. Response Formatting
Maintain consistent response structures across all endpoints for predictable API behavior.

### 8.1 Success Responses
Use consistent success response format with meaningful messages.

```javascript
// ✅ Current approach for favorites
let fav_msg = 'Book added to favourites successfully.'
return res.render('confirmFavourite', {fav_msg});
```

### 8.2 Error Responses
Provide specific error messages that help users understand what went wrong.

```javascript
// ✅ Current good example
if (isFavourite) {
    let fav_msg = 'This book is already in your favourites.'
    return res.render('confirmFavourite',{fav_msg});
}
```

## 9. Route Organization
Structure routes logically and use RESTful conventions where possible for intuitive API design.

```javascript
// ✅ Current structure is good
router.post('/add_to_cart', addToCart);
router.get('/showcart', async (req, res) => {
```

## 10. Security Practices
Implement security measures to protect against common vulnerabilities.

### 10.1 Input Sanitization
Clean user inputs to prevent injection attacks and data corruption.

```javascript
// ✅ Add validation for ObjectIds
const bookId = req.body.bookId;
if (!mongoose.Types.ObjectId.isValid(bookId)) {
    return res.status(400).json({ message: 'Invalid book ID format' });
}
```

### 10.2 Environment Variables
Use environment variables for sensitive configuration data instead of hardcoding values.

```javascript
// ✅ Current usage
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
```

## 11. Code Reusability
Extract common patterns into reusable functions to reduce duplication and improve maintainability.

### 11.1 Utility Functions
Create helper functions for repeated operations like response formatting.

```javascript
// ✅ Suggested addition
const renderWithUser = (res, template, data = {}) => {
    res.render(template, { ...data, user: dummyUser });
};
```

### 11.2 Middleware
Use middleware for common operations like user authentication and input validation.

```javascript
// ✅ Current structure allows for middleware
app.use('/api/book', bookRoute);
app.use('/api/cart', cartRoute);
```

## 12. Performance Considerations
Write code that performs well and scales appropriately.

### 12.1 Database Queries
Use efficient query patterns and avoid unnecessary database calls.

```javascript
// ✅ Current efficient pattern
const itemIndex = cart.items.findIndex(item => item.book_id.equals(book_id));
```

### 12.2 Memory Management
Clean up resources and avoid memory leaks in long-running processes.

```javascript
// ✅ Current good practice - clearing cart after order
cart.items = [];
await cart.save();
```

## Implementation Checklist

- [ ] Convert snake_case variables to camelCase
- [ ] Add meaningful error messages to all controllers
- [ ] Implement input validation for all user inputs
- [ ] Add JSDoc comments to all exported functions
- [ ] Create utility functions for common operations
- [ ] Add environment variable validation
- [ ] Implement proper logging instead of console.log
- [ ] Add security middleware for input sanitization
- [ ] Create consistent response formatting
- [ ] Add database existence checks before operations

Following these standards will make your codebase more maintainable, secure, and professional while building on the solid foundation you already have.