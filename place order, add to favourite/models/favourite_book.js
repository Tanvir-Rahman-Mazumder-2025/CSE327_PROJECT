import mongoose from 'mongoose';

import Book from './book.js';
const favouriteBookSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    }
})
export default mongoose.model("FavouriteBook", favouriteBookSchema);