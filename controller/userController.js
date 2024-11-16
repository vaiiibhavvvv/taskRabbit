import { userSchema } from '../model/UserModel';
import { JsonWebTokenError } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

exports.register = async(req,res) => {
    try {
        const {name,email,phone,password} = req.body;
        const user = new user({name,email,phone,password});
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.login = async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await user.findOne({email});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const token = jwt.sign({id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );
        res.json({token});

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

exports.updateProfile = async (req,res) => {
    try {
        const {name,phone} = req.body;
        const user = await user.findByIdAndUpdate(req.user.id,{name,phone},{new: true});
        res.json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};