const mongoose=require('mongoose')

const pdfSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },pdfUrl:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        // required:true
    }
})

const pdfs=mongoose.model('pdfs',pdfSchema)
module.exports=pdfs