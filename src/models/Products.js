import mongoose, { Schema } from "mongoose";

const productSchema =  mongoose.Schema({
    title:{ type:String,required:true },
    price:{ type:String,required:true },
    description:{
        type:String,
    },
},{
    timestamps:true, versionKey:false
})
export default mongoose.model("Products",productSchema);