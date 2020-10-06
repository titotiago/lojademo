const express = require('express');
const router = express.Router();
const Products = require('../Schemas/product');


// POSTS PRODUCT
router.post('/', async(req,res) =>{
    console.log(req.body)
    try{
        const savedProduct = await Products.insertMany(req.body);
        res.json(savedProduct)
    }catch(err){
        res.json({message:err})
    }
})

// RETURNS ALL PRODUCTS
router.get('/', async(req,res) =>{
    try{
        const products = await Products.find();
        res.json(products)
    }catch(err){
        res.json({message:err})
    }
})

// SPECIFIC PRODUCT
router.get('/:productKey', async(req,res) =>{
    try{
        const product = await Products.find({'key':req.params.productKey});
    }catch(err){
        res.json({message:err})
    }
})

// DELETE PRODUCT
router.delete('/delete/:productKey', async(req,res)=>{
    try{
        const removedProduct = await Products.deleteOne({'key':req.params.productKey});
        res.json(removedProduct)
    }catch(err){
        res.json({message:err})
    }
})


module.exports = router;