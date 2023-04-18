// import mongoose

const mongoose = require('mongoose')


const cartSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    
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
    granttotal:{
        type:Number,
       required:true 
    }
})
const cartitems= mongoose.model('cartitems',cartSchema)

module.exports = cartitems