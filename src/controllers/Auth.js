// Đảm bảo đường dẫn và tên file phù hợp

import User from "../models/User.js";
import { generateToken } from "../ultis/jwt.js";
import { comparePassword, hashPassword } from "../ultis/password.js";

export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra email có tồn tại trong hệ thống hay chưa
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "Email này đã tồn tại"
            });
        }

        // Mã hóa mật khẩu
        const hashedPassword = await hashPassword(password);
        if (!hashedPassword) {
            return res.status(500).json({
                message: "Mã hóa mật khẩu thất bại!"
            });
        }

        // Tạo một bản ghi user mới
        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        // Trả về thông báo thành công
        return res.status(201).json({
            success: true,
            user: newUser,
            message: "Đăng ký thành công"
        });
    } catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // kiểm tra email đã đăng ký trong hệ thống hay chưa
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).json({
                message: "Email chưa đăng ký"
            });
        }

        // giải mã password 
        const isMatch = await comparePassword(password,userExists.password);
        if (!isMatch) {
            return res.status(500).json({
                message: "Mật khẩu không đúng"
            });
        }

        // generate token
        const token = generateToken({ _id:userExists._id ,})
        userExists.password = undefined;
        // Trả về thông báo thành công
        return res.status(200).json({
            success:true,
            user:userExists,
            accessToken:token
        })


    } catch (error) {
        next(error);
    }
};


