# Bookstore Management System

A full-stack Express.js web application for managing an online bookstore with features for browsing books, managing shopping cart, favorites, and order processing.

## Features

### 🔍 Book Management
- Browse and view all available books
- Display books in a user-friendly interface using EJS templates

### ❤️ Favorites System
- Add books to personal favorites list
- Prevent duplicate favorites with validation
- View confirmation messages for favorite actions

### 🛒 Shopping Cart
- Add books to cart with customizable quantities
- Remove items from cart
- View cart contents with populated book details
- Automatic price calculation based on quantity

### 📦 Order Processing
- Complete order placement with address collection
- Support for multiple payment methods (default: COD - Cash on Delivery)
- Address validation and storage
- Order confirmation with detailed information
- Automatic cart clearing after successful order

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **View Engine**: EJS (Embedded JavaScript Templates)
- **Environment Management**: dotenv

## Project Structure

```
├── app.js                         # Main application file
├── config/
│   └── database.js                # Database configuration
├── controllers/
│   ├── getbooks.js                # Book listing controller
│   ├── addFavourite.js            # Favorites management
│   ├── addToCart.js               # Cart operations (add/remove)
│   └── placeOrder.js              # Order processing
├── routes/
│   ├── bookRoute.js               # Book-related routes
│   ├── cartRoute.js               # Cart management routes
│   └── orderRoute.js              # Order processing routes
├── models/
│   ├── book.js                    # Book schema
│   ├── cart.js                    # Shopping cart schema
│   ├── favourite_book.js          # Favorites schema
│   ├── address.js                 # Address schema
│   ├── payment.js                 # Payment schema
│   └── order.js                   # Order schema
├── dummyuser.js                   # Dummy user for testing
└── views/                         # EJS templates
    ├── showbook.ejs
    ├── cart.ejs
    ├── confirmOrder.ejs
    ├── confirmFavourite.ejs
    └── collectAddress.ejs
```

## API Endpoints

### Book Routes (`/api/book`)
- `GET /get_books` - Display all books
- `POST /add_to_favorites` - Add book to favorites

### Cart Routes (`/api/cart`)
- `POST /add_to_cart` - Add item to shopping cart
- `POST /remove_from_cart` - Remove item from cart
- `GET /showcart` - Display cart contents

### Order Routes
- `GET /collectAddress` - Display address collection form
- `POST /place_order` - Process order placement

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookstore-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   ```

4. **Database Setup**
   - Ensure MongoDB is running on your system
   - The application will connect to the database specified in your environment variables

5. **Start the application**
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Key Features Explanation

### User Authentication
- Currently uses a dummy user system for development/testing
- User ID is retrieved from `dummyuser.js` for all operations

### Cart Management
- Supports quantity updates for existing items
- Calculates total price automatically
- Maintains cart state across sessions

### Order Processing
- Collects comprehensive address information
- Creates separate payment records for each book
- Generates individual orders for each cart item
- Provides order confirmation with full details

### Data Validation
- Validates required fields for address and payment
- Checks for empty carts before order placement
- Prevents duplicate favorites

## Database Models

The application uses several MongoDB collections:
- **Books**: Store book information and pricing
- **Cart**: User shopping cart with items and quantities
- **FavoriteBook**: User's favorite books
- **Address**: Delivery address information
- **Payment**: Payment method and transaction details
- **Order**: Order records with status tracking

## Development Notes

- All routes render EJS templates for user interface
- Error handling implemented with try-catch blocks
- Console logging for debugging purposes
- Modular structure with separate controllers and routes

## Future Enhancements

- Implement proper user authentication and session management
- Add user registration and login functionality
- Integrate real payment gateways
- Add order tracking and status updates
- Implement inventory management
- Add search and filter functionality for books
- Include user profile management