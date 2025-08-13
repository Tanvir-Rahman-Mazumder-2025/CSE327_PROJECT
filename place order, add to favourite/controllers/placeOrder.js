import Cart from '../models/cart.js';
import Address from '../models/address.js';
import Payment from '../models/payment.js';
import Order from '../models/order.js';
import Book from '../models/book.js';
import dummyUser from '../dummyuser.js';

export const placeOrder = async (req, res) => {
  try {
    const user_id = dummyUser._id;

    if (!user_id) {
      return res.status(401).json({ message: "Please log in to place an order." });
    }

    const cart = await Cart.findOne({ user_id }).populate("items.book_id");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty." });
    }

    const {
      phone, street, city, state, zip_code, country,
      payment_method = 'COD'
    } = req.body;

    if (!phone || !street || !city || !state || !zip_code || !country) {
      return res.status(400).json({ message: "Please complete all required information." });
    }


    const address = new Address({
      user_id,
      phone,
      street,
      city,
      state,
      zip_code,
      country
    });
    await address.save();

    const orders = [];

    for (const item of cart.items) {
      const totalprice = item.book_id.price * item.quantity;


      const payment = new Payment({
        user_id,
        address_id: address._id,
        book_id: item.book_id._id,
        totalprice,
        payment_method,
        quantity: item.quantity
      });
      await payment.save();


      const order = new Order({
        user_id,
        address_id: address._id,
        book_id: item.book_id._id,
        payment_id: payment._id,
        quantity: item.quantity,
        order_status: 'Placed'
      });
      await order.save();

      orders.push(order);
    }


    cart.items = [];
    await cart.save();

    // return res.status(200).json({
    //   message: "Your order has been placed successfully.",
    //   orders
    // });
    res.render('confirmOrder', { orders, address, user: dummyUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
