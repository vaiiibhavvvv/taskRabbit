import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        
    },
     
    email: {
        type: String,
        require: true,
        unique: true,
        match: /.+\@.+\..+/
    },

    phone: {
        type: String,
        require: true,
        unique: true,
        match : /^[0-9]{10,15}$/
    },

    password: {
        type: String,
        requrie: true,
        
        }
    

});