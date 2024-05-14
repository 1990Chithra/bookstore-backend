const mongoose=require('mongoose')


const favoriteSchema=new mongoose.Schema({
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
    pdfUrl:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        // required:true
    }
})

const favorites=mongoose.model('favorites',favoriteSchema)
module.exports=favorites