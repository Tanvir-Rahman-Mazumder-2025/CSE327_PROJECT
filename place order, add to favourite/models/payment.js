import mongoose from 'mongoose';
import Book from './book.js';

const paymentSchmema = new mongoose.Schema({
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
        ref: 'Book',
        required: true,
    },
    totalprice: {
        type: Number,
        required: true,
    },
    payment_method: {
        type: String,
        default: 'COD',
    },
    payment_status: {
        type: String,
        default: 'Pending',
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
});
export default mongoose.model("Payment", paymentSchmema);