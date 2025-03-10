import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    username:{
        type:String,
    },
    role:{
        type:String,
        default:"member",
        enum:["admin","member"],
    }
}, {
    timestamps:true,
    versionKey:false,
})
export default mongoose.model('User',userSchema)