import fs from 'fs';
import productModel from '../models/productModel.js';
import slugify from 'slugify';


export const createProductController = async(req,res)=> {
    try {
        const {name,slug,description,price,category,quantity,shipping} = req.fields;
        const {photo} = req.files;

        switch(true){
            case !name:
                return res.status(500).send({error:'Name is Required'})
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({error:'Category is Required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is Required'})
            case photo && photo.size > 1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1mb'});
        }

        const products = new productModel({...req.fields,slug:slugify(name)});
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType= photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message:"Product Created Successfully",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while creating product"
        })
    }

};


export const getProductController = async(req,res) =>{
    try {
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1})
        res.status(200).send({
            success:true,
            counTotal: products.length,
            message:'All products',
            products
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting products"
        })
    }
}



export const getSingleProductController = async(req,res) =>{
    try {
        const product = await productModel.find({slug:req.params.slug}).select("-photo").populate('category');
        res.status(200).send({
            success:true,
            message:'Product get successfully',
            product
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting product"
        })
    }
}



export const productPhotoController = async(req,res) =>{
    try {
        const product = await productModel.findById(req.params.pid).select("photo");
        if(product.photo.data){
            res.set('Content-type',product.photo.contentType)
            return  res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting photo"
        })
    }
}


export const deleteProductController = async(req,res) =>{
    try {
        const deletedProduct = await productModel.findByIdAndDelete(req.params.pid);
        if (!deletedProduct) {
        return res.status(404).send({
        success: false,
        message: "Product not found"
    });
}
        res.status(200).send({
            success:true,
            message:'Product deleted successfully',
            
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while deleting photo"
        })
    }
}


export const updateProductController =async (req,res) =>{
    try {
        const {name,slug,description,price,category,quantity,shipping} = req.fields;
        const {photo} = req.files;

        switch(true){
            case !name:
                return res.status(500).send({error:'Name is Required'})
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({error:'Category is Required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is Required'})
            case photo && photo.size > 1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1mb'});
        }

        const products = await productModel.findByIdAndUpdate(req.params.pid, 
            {...req.fields, slug:slugify(name)},{new:true}
        )
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType= photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message:"Product Updated Successfully",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Updating Product"
        })
    }
};