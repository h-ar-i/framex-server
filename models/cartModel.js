const mongoose = require('mongoose')

const cartItemschema = new mongoose.Schema({
    id:{
        type:Number,
        required:true       
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }

})

const cartItems = mongoose.model("cartItems",cartItemschema)
module.exports = cartItems