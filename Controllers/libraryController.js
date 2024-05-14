const libraries=require('../Models/librarySchema')

exports.addToLibrary=async(req,res)=>{

   const {id,bookName,authorName,image,category,price,quantity}=req.body
    try{

        const libItem=await libraries.findOne({id})
        if(libItem){
            libItem.quantity+=1
            libItem.price=libItem.quantity*libItem.price
            res.status(200).json("Book updated successfully")

        }
        else{
            const libNewProduct=new libraries({id,bookName,authorName,image,category,price,quantity})
            await libNewProduct.save()
            res.status(200).json("Book added successfully")

        }

    }
    catch(err){
        res.status(404).json(err)
    }

}
exports.getLibrary=async(req,res)=>{
    try{
        const allLibraryBook=await libraries.find()
        res.status(200).json(allLibraryBook)
    }
    catch(err){
        res.status(404).json(err)

    }
}
exports.deleteLibraryBook=async(req,res)=>{
    const {id}=req.params

    try{
        const deleteLibrary=await libraries.deleteOne({id})
        if(deleteLibrary){
            const allLibraryBook=await libraries.find()
            res.status(200).json(allLibraryBook)

        }

    }
    catch(err){
        res.status(404).json(err)

    }
}
exports.incrementLibrary=async(req,res)=>{
    const {id}=req.params
    try{

        const incrementBook=await libraries.findOne({id})
        if(incrementBook){
            incrementBook.quantity+=1
            incrementBook.grandTotal=incrementBook.price*incrementBook.quantity
            await incrementBook.save()
            const allLibraryBook=await libraries.find()
            res.status(200).json(allLibraryBook)       
         }
         else{
            res.status(402).json("Book not found")

         }

    }
    catch(err){
        res.status(404).json(err)

    }
}
exports.decrementLibrary=async(req,res)=>{
    const {id}=req.params
    try{

        const decrementBook=await libraries.findOne({id})
        if(decrementBook){
            decrementBook.quantity-=1
            if(decrementBook.quantity==0){
                const deleteLibrary=await libraries.deleteOne({id})
                if(deleteLibrary){
                    const allLibraryBook=await libraries.find()
                    res.status(200).json(allLibraryBook)

                }
            }  
            else{
                decrementBook.grandTotal=decrementBook.price*decrementBook.quantity
                await decrementBook.save()
                const allLibraryBook=await libraries.find()
                res.status(200).json(allLibraryBook)  
            }   
         }
         else{
            res.status(402).json("Book not found")

         }

    }
    catch(err){
        res.status(404).json(err)

    }
}
