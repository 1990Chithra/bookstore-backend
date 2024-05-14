const favorites=require('../Models/favoriteSchema')

exports.addToFavorites=async(req,res)=>{
    const {id,bookName,authorName,image,category,price,pdfUrl}=req.body

    const userId=req.payload
    try{
        const existingBook=await favorites.findOne({id})
        if(existingBook){
            
            res.status(404).json("Book already exist")
        }
        else{
            const newBook=new favorites({id,bookName,authorName,image,category,price,pdfUrl,userId})
            await newBook.save()
            res.status(200).json("Book added successfully")
        }
    }
    catch(err){
        res.status(500).json({error:err})

    }
}
exports.getFavorites=async(req,res)=>{
    try{
        const favoriteBook=await favorites.find()
        if(favoriteBook){
            res.status(200).json(favoriteBook)

        }
    }
    catch(err){
        res.status(500).json({error:err})

    }
}
exports.deleteFromFavorites=async(req,res)=>{
    const {id}=req.params
    console.log(id);
    try{
        const deleteItem=await favorites.deleteOne({id})
        if(deleteItem){
            const favoriteBook=await favorites.find()
            res.status(200).json(favoriteBook)

        }

    }
    catch(err){
        res.status(500).json({error:err})

    }
}
