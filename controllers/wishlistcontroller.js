const wishlists = require('../models/wishlistSchema')

exports.addtoWishlist = async (req,res)=>{
    const {id,title,price,image} = req.body

    try{
        const item = await wishlists.findOne({id})
        if(item){

            res.status(401).json("item already present in your wishlist")

        }
        else{
            const newProduct = new wishlists({
                id,title,price,image
            })
            await newProduct.save()
            res.status(200).json("item added in your wiislist")
        }


    }
    catch(error){

        res.status(401).json(error)
        

    }
}
exports.getallwishlistitems = async (req,res) =>{
    try {
        const wishlist = await wishlists.find()
        res.status(200).json(wishlist)
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.removewishlistitem = async (req,res) =>{
    const id = req.params.id
    try{
        const item = await wishlists.deleteOne({id})
        if(item){
            const allitems = await wishlists.find()
            res.status(200).json(allitems)
        }
        else{
            res.status(401).json("item not in the wishlist")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}