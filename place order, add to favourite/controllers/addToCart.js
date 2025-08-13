import Cart from '../models/cart.js';
import Book from '../models/book.js';
import dummyUser from '../dummyuser.js';

export const addToCart = async (req, res) => {
  try {
    const user_id = dummyUser._id;
    const { book_id, quantity } = req.body;
    const quantityNum = Number(quantity) || 1;

    const book = await Book.findById(book_id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    let cart = await Cart.findOne({ user_id });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.book_id.equals(book_id));
      console.log(itemIndex);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantityNum;
        cart.items[itemIndex].totalprice = cart.items[itemIndex].quantity * book.price;
      } else {
        cart.items.push({
          book_id,
          quantity: quantityNum,
          totalprice: quantityNum * book.price,
        });
      }
      await cart.save();
    } else {
      cart = new Cart({
        user_id,
        items: [{
          book_id,
          quantity: quantityNum,
          totalprice: quantityNum * book.price,
        }]
      });
      await cart.save();
    }

    const updatedCart = await Cart.findOne({ user_id }).populate('items.book_id');
    res.render('cart', { cart: updatedCart, user: dummyUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const removeFromCart = async (req, res) => {
  try {
    console.log("working remove from cart controller");
    
    const user_id = dummyUser._id;
    const book_id = req.body.book_id; 
    console.log(user_id, book_id  );
    if (!user_id || !book_id) {
      return res.status(400).json({ message: "User ID and Book ID are required ." });
    }

    const cart = await Cart.findOne({ user_id });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }

   
    const updatedItems = cart.items.filter(item => !item.book_id.equals(book_id));

  
    if (updatedItems.length === cart.items.length) {
      return res.status(404).json({ message: "Book not found in cart." });
    }

  
    cart.items = updatedItems;
  

    await cart.save();

    // res.status(200).json({ message: "Book removed from cart.", cart });
    res.render('cart', { cart, user: dummyUser });

  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
