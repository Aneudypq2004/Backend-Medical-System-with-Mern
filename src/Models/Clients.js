import mongoose, { Schema } from "mongoose";

const ClientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true

    },

    email: {
        type: String,
        required: true,
        // unique: true,
        trim: true
    },

    tel: {
        type: String,
        required: true,
        trim: true
    },

    tasks : {
        type: String,
        required: true,
        trim: true
    },


    price: {
        type: Number,
        required: true,
        trim: true
    },

    userId : {
        type : Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps : true
})

const Client = mongoose.model('Client', ClientSchema);

export default Client;