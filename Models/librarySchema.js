const mongoose=require('mongoose')

const librarySchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    bookName:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    grandTotal:{
        type:Number,
    }
})

const libraries=mongoose.model('libraries',librarySchema)
module.exports=libraries