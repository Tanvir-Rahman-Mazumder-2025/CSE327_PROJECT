import express from 'express';
import { addToCart ,removeFromCart} from '../controllers/addToCart.js';
import dummyUser from '../dummyuser.js';
import Cart from '../models/cart.js';
const router = express.Router();


router.post('/add_to_cart', addToCart);
router.post('/remove_from_cart',  removeFromCart);


router.get('/showcart', async (req, res) => {
  try {
    const user_id = dummyUser._id;
    const cart = await Cart.findOne({ user_id }).populate('items.book_id');
    res.render('cart', { cart, user: dummyUser });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


export default router;