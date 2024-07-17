import mongoose, { models } from "mongoose";

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    avatar:String,
    password : String,
},{timestamps:true})


export const User = models?.User || mongoose.model('User',UserSchema);
