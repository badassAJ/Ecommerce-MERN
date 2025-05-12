import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async(req,res) => {
    try {
        const {name,email,password,phone,address,question} =req.body

        if(!name){
            return res.send({message:'Name is Required'})
        }
        if(!email){
            return res.send({message:'Email is Required'})
        }
        if(!password){
            return res.send({message:'Password is Required'})
        }
        if(!phone){
            return res.send({message:'Phone is Required'})
        }
        if(!address){
            return res.send({message:'Address is Required'})
        }
        if(!question){
            return res.send({message:'Answer is Required'})
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already Register please login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user =await new userModel({name,email,phone,address,password:hashedPassword,question}).save();

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        });
    }
};


//post login
export const loginController =async (req,res)=>{
    try {
        const {email,password} =req.body;

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            });
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            });
        }
        const match  =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password'
            })
        }

        //token
        const token =  JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d',});
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                name:user.name,
                email:user.email,
                phone: user.phone,
                address: user.address,
                role:user.role,
            },
            token,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
    })
}
};

//forgot password
export const forgotPasswordController = async(req,res) => {
    try {
        const {email,question,newPassword} = req.body;
        if(!email) {
            res.status(400).send({message:'Email is required'})
        }
        if(!question) {
            res.status(400).send({message:'answer is required'})
        }
        if(!newPassword) {
            res.status(400).send({message:'New Password is required'})
        }

        const user = await userModel.findOne({email,question})

        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email or Answer"
            })
        }

        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
        })

    } catch (error) {
         console.log(error);
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error
        });
    }
}


export const testController = (req,res) => {
    try {
        res.send('Protected Route');
    } catch (error) {
        console.log(error);
        res.send({error});
    }
}

