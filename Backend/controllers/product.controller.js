import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find({})  
        res.status(200).json({success: true, data: products}); 
    } catch (error) {
        console.error("Error in fetching products:", error.message );
        res.status(500).json({success:false, message: "Server error"})
    }
};

export const createProduct = async (req,res) => {
    const product = req.body; //user will send this data, to grab data also from the user

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message:"Please provide all fields"});
    }

    const newProduct = new Product(product) //this Product is the Product object we created in the  product.model.js file we created. (product) is the data gotten from the user     

    try {
        await newProduct.save(); //saves the data
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in create product:", error.message );
        res.status(500).json({success:false, message: "Server error"})
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product ID"})
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true}); //new:true is used to give you the object after updated
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success:false, message:" server error"})
    }
};

export const deleteProduct =  async (req, res) => {
    const { id } = req.params; //the same thing you passed in your route is what youll pass
    

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product ID"})
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"}); //to delete 
    } catch (error) {
        console.error("Error in delete  product:", error.message );
        res.status(500).json({success:false, message: "Server Error"})
    }
    }