const express = require('express')

const router = new express.Router()
const controllers = require('../controllers/productcontrol')
// importwishlist controler
const wishlistControlers = require('../controllers/wishlistcontroller')
const cartcontrollers = require('../controllers/cartcontroller')

router.get('/products/get-all-products',controllers.getallproducts)

router.get('/products/:id',controllers.viewProduct)

router.post('/products/add-to-wishlist',wishlistControlers.addtoWishlist)


router.get('/wishlist/get-all-items',wishlistControlers.getallwishlistitems)

router.delete('/wishlist/delete-wishlist/:id',wishlistControlers.removewishlistitem)

// cart
router.post('/cart/addtocart',cartcontrollers.addTocart)

// gert cart items
router.get('/cart/get-all-items',cartcontrollers.getCartitems)

// cart remove item
router.delete('/cart/delete-item/:id',cartcontrollers.removeCartitem)


router.get('/increment-item/:id',cartcontrollers.incrementcartitem)
// decrement item
router.get('/decerment-item/:id',cartcontrollers.decrementitem)

router.delete('/deletecart',cartcontrollers.emptycart)
module.exports = router