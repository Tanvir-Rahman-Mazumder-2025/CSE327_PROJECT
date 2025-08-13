import mongoose from "mongoose";
import book from "./book.js";

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    address_id: {
        type: mongoose.Schema.Types.ObjectId,       
        ref: 'Address',
        required: true,
    },
    book_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    payment_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: true,
    },
    order_status: {
        type: String,   
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    quantity: {
        type: Number,   
    }
});
export default mongoose.model("Order",orderSchema);
