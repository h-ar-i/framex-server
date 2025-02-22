const cartItems = require('../models/cartModel')

//add to cart
exports.addTocart = async (req, res) => {
    const { id, title, price, image, quantity } = req.body
    const userId = req.payload
    try {
        const existingProduct = await cartItems.findOne({ id, userId })
        if (existingProduct) {
            existingProduct.quantity += 1
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            await existingProduct.save()
            res.status(200).json("items added to ur cart !!!!")
        } else {
            const newProduct = new cartItems({
                id, title, price, image, quantity, totalPrice: price, userId
            })
            await newProduct.save()
            res.status(200).json("item added to ur cart.....")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

//get cart
exports.getCart = async (req, res) => {
    const userId = req.payload
    try {
        const allProducts = await cartItems.find({ userId })
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(401).json(err)
    }
}

//removeitem
exports.removeCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const removeItem = await cartItems.findByIdAndDelete({ _id: id })
        res.status(200).json(removeItem)
    } catch (err) {
        res.status(401).json(err)
    }
}

//inc cart
exports.incrementCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const selectedProduct = await cartItems.findOne({ _id: id })
        console.log(selectedProduct);
        selectedProduct.quantity += 1
        selectedProduct.totalPrice = selectedProduct.quantity * selectedProduct.price
        await selectedProduct.save()
        res.status(200).json(selectedProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}

//dec cart
exports.decrementCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const selectedProduct = await cartItems.findOne({ _id: id })
        selectedProduct.quantity -= 1
        if (selectedProduct.quantity == 0) {
            await cartItems.deleteOne({ _id: id })
            res.status(200).json("item removed")
        } else {
            selectedProduct.totalPrice = selectedProduct.quantity * selectedProduct.price
            await selectedProduct.save()
            res.status(200).json(selectedProduct)
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

//emptycart
exports.emptyCart = async (req,res)=>{
    const userId = req.payload
    try{
        const result = await cartItems.deleteMany({userId})
        res.status(200).json("All items has removed........")
    }catch(err){
        res.status(401).json(err)
    }
}