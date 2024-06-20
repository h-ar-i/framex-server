const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')


const router = new express.Router()

//get all products
router.get('/all-products',productController.getAllProductsController)

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//addtowishlist
router.post('/user/add-to-wishlist',jwtMiddleware,wishlistController.addTowishlist)

//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//get a product
router.get('/:id/get-product',productController.getAproduct)

//removewishlist
router.delete(`/remove-wishlist/:id/item`,jwtMiddleware,wishlistController.removeWishlist)

//add to cart
router.post(`/user/add-to-cart`,jwtMiddleware,cartController.addTocart)

//get cart
router.get(`/get-cart`,jwtMiddleware,cartController.getCart)

//removecartitem
router.delete('/remove-cart/:id/item',jwtMiddleware,cartController.removeCartItem)

//inc item
router.get('/:id/increment-cart',jwtMiddleware,cartController.incrementCartItem)

//dec cart
router.get('/:id/decrement-cart',jwtMiddleware,cartController.decrementCartItem)

//emptycart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)


module.exports = router