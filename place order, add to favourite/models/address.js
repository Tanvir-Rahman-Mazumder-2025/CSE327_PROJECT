import mongoose from 'mongoose';


const addressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    phone:{
        type: String,
    },
    street:{
        type: String,
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    zip_code:{
        type: String,
    },
    country:{
        type: String,
    }
})

export default mongoose.model("Address",addressSchema);