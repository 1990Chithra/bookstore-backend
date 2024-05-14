const books=require('../Models/bookSchema')

exports.getAllBooks=async(req,res)=>{
    //get all product from the mongoDB- find()
    try{
        const AllBooks= await books.find()
        res.status(200).json(AllBooks)
    }
    catch(err){
        res.status(404).json(err)
    }
}
exports.getBook=async(req,res)=>{

    const {id}=req.params
    console.log(id);
    // get a particular product details from the database-findOne()
    try{
        const ABook=await books.findById(req.params.id)
        res.status(200).json(ABook)

    }
    catch(err){
        res.status(404).json(err)
    }
}
// exports.getCategory=async(req,res)=>{
    
//     try{
//             const categoryBook=await books.find({category})
//             res.status(200).json(categoryBook)
    
//     }
//     catch(err){
//             res.status(500).json({error:err})
    
//     }
    
    
// }

exports.addBook=async(req,res)=>{

    try{
            const newBook=new books({
                id:req.body.id,
                bookName:req.body.bookName,
                authorName:req.body.authorName,
                image:req.body.image,
                category:req.body.category,
                price:req.body.price,
                description:req.body.description,
                rating:req.body.rating,
                pdfUrl:req.body.pdfUrl


            });
            await newBook.save()
            res.status(200).json("Book added successfully")

        
    }
    catch(err){
        res.status(404).json(err)

    }
}

exports.updateBook=async(req,res)=>{
    const {bookName,authorName,image,category,price,description,rating,pdfUrl}=req.body
    const {id}=req.params
    console.log(id);
    try{
        const Book=await books.findByIdAndUpdate(id,{bookName,authorName,image,category,price,description,rating,pdfUrl})
        res.status(200).json("Book updated successfully")

    }
    catch(err){
        res.status(404).json(err)

    }
    
}
exports.deleteBook=async(req,res)=>{
    const {id}=req.params
    console.log(id);
    try{
        const Book=await books.deleteOne({id})
        res.status(200).json("Book deleted successfully")


    }
    catch(err){
        res.status(404).json(err)

    }

}
