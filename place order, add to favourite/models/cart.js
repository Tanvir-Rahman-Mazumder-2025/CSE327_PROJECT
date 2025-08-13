import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',

    },
    items: [{
        book_id: {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        }   ,
        totalprice: {
            type: Number,
          
        }
    }]
});
export default mongoose.model("Cart", cartSchema);