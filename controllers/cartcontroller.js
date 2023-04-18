// import cart items collection model
const cartitems = require('../models/cartSchema')

// to add item to cart
exports.addTocart = async (req,res)=>{
    const {id,title,image,price,quantity} = req.body
    // logic
    try{
        const product= await cartitems.findOne({id})
        if(product){
            product.quantity+=1
            // ipdate grand total
            product.granttotal=product.price * product.quantity
            // save changes
            await product.save()
            // send res to cclient
            res.status(200).json('items added to your cart')

        }
        else{
            // product is nnot in the cart
            const newproduct = new cartitems({
                id,title,price,image,quantity,granttotal:price
            })
            // save channges
            await newproduct.save()
            res.status(200).json('item Added to your cart')
            
        }

    }
    catch(error){
        res.status(401).json(error)

    }

}

// get cart items
exports.getCartitems = async (req,res)=>{
    try{
        const allitems = await cartitems.find()

        res.status(200).json(allitems)
    }
    catch(error){
        res.status(401).json('item not found')
    }

}

// remove item in cart

exports.removeCartitem=async (req,res)=>{
    const {id} = req.params

    // logic
    try{
        const removeitem = await cartitems.deleteOne({id})
        if(removeitem){
            const allitems = await cartitems.find()
            res.status(200).json(allitems)

        }
        else{
            res.status(401).json("item is not in the cart")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.incrementcartitem = async (req,res)=>{
    const {id} = req.params

    try{
        const item = await cartitems.findOne({id})

        if(item){
            item.quantity +=1
            item.granttotal = item.quantity*item.price
            await item.save()
             const allitems =await cartitems.find()
             res.status(200).json(allitems)
        
        }
        else{

            res.status(401).json('something went wrong')
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}

exports.decrementitem = async (req,res)=>{
    const {id} = req.params

   try{
    const item = await cartitems.findOne({id})
    if(item){
        item.quantity -=1
        if(item.quantity==0){
            const deleteitem = await cartitems.deleteOne({id})
            const allitems = await cartitems.find()
            res.status(200).json(allitems)

        }
        else{
          
          item.granttotal = item.quantity*item.price
          await item.save()
           const allitems =await cartitems.find()
           res.status(200).json(allitems)

        }

    }
    else{
        res.status(401).json('item not found')
    }

   }
   catch(error){
    res.status(401).json(error)

   }

}

// empty cart

exports.emptycart = async (req,res)=>{
    try{

        const result = await cartitems.deleteMany({})
        res.status(200).json('your cart is empry')
    }
    catch(error){
        res.status(401).json(error)
    }
}