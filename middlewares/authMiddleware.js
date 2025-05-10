import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const requireSignIn = async (req,res,next) => {
    // try {
    //     const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
    //     req.user = decode;
    //     console.log("Decoded:", decode);


    //     next();
        
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        const decoded = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id); // ✅ Fetch full user
        if (!user) {
            return res.status(401).send({ success: false, message: 'User not found' });
        }
        req.user = user; // ✅ Set full user object to req.user
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ success: false, message: 'Invalid Token' });
    }
};


//admin access
export const isAdmin = async (req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !==1){
            return res.status(401).send({
                success:false,
                message:'UnAuthorized Access'
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        

        console.log("req.user in isAdmin:", req.user);
        res.status(401).send({
            success:false,
            error,
            message:'Error in admin middleware'
        })
    }
}