const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
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
    description:{
        type:String,
        required:true,
    },
    rating:{
        rate:{
            type:Number,
            required:true,
        },
        count:{
            type:Number,
            required:true,
        }

    },
    pdfUrl:{
        type:String,
        required:true,
    }
})

const books=mongoose.model('books',bookSchema)
module.exports=books
