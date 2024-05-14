const pdfs=require('../Models/pdfSchema')


exports.addPdfs=async(req,res)=>{
    const {id,pdfUrl}=req.body

    const userId=req.payload
    try{
        const existingPdf=await pdfs.findOne({id})
        if(existingPdf){
            
            res.status(404).json("Pdf already exist")
        }
        else{
            const newPdf=new pdfs({id,pdfUrl,userId})
            await newPdf.save()
            res.status(200).json("Pdf added successfully")
        }
    }
    catch(err){
        res.status(500).json({error:err})

    }
}

exports.getPdfs=async(req,res)=>{
    
    // get a particular product details from the database-findOne()
    // const {id}=req.params
    // console.log(id);
    // get a particular product details from the database-findOne()
    try{
        const ABook=await pdfs.find()
        res.status(200).json(ABook)

    }
    catch(err){
        res.status(500).json({error:err})
    }
}