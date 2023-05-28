import mongoose from "mongoose";
const userschema = mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    Email:{
        type : String,
        required:true
    } ,password:{
        type : String,
        required:true
    },
    mobno:{
        type : String,
        required:true
    }
})
export const usermodel = new mongoose.model("user",userschema) 