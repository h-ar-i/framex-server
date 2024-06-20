const frames = require('../models/productModel')

exports.getAllProductsController = async (req,res)=>{
    try{
        const result = await frames.find()
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAproduct = async (req,res)=>{
    const {id} = req.params
    try{
        const item = await frames.findOne({id}) 
        res.status(200).json(item)
    }catch(err){
      res.status(401).json(err)
      console.log(err);
    }
}