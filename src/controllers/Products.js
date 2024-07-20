import Products from "../models/Products.js"
export const createProduct = async (req, res, next) => {
    try {
        const data = await Products.create(req.body)
        return res.status(201).json({
            success:true,
            data,
            message:"Thêm sản phẩm thành công"
        })
    } catch (error) {
        console.log(error);
    }
}
export const getAllProducts = async (req, res, next) => {
    try {
        const data = await Products.find()
        return res.status(200).json({
            success:true,
            data,
            message:"Danh sách sản phẩm "
        })
    } catch (error) {
        console.log(error);
    }
}
export const getByIdProduct = async (req, res, next) => {
    try {
        const data = await Products.findById(req.params.id)
        return res.status(200).json({
            success:true,
            data,
            message:"Lấy sản phẩm thành công"
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = async (req, res, next) => {
    try {
        const data = await Products.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success:true,
            data,
            message:"Xóa sản phẩm thành công"
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProduct = async (req, res, next) => {
    try {
        const data = await Products.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        })
        return res.status(200).json({
            success:true,
            data,
            message:"Cập nhật sản phẩm thành công"
        })
    } catch (error) {
        console.log(error);
    }
}