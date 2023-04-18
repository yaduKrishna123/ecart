const products=require('../models/productSchema')

exports.getallproducts = async(req,res)=>{
  try { const allproducts = await products.find()
    res.status(200).json(allproducts)
}
catch (error) {
    res.status(401).json(error)

}

}

// view products

exports.viewProduct = async(req,res)=>{

  const id = req.params.id

  try{
    const product = await products.findOne({id})

    if(product){
      // products details to client
      res.status(200).json(product)

    }
    else{
      res.status(404).json("item not avilable")
    }

  }
  catch(error){
    res.status(401).json(error)
  }


 
}