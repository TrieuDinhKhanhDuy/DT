// Đảm bảo đường dẫn và tên file phù hợp

import User from "../models/User.js";
import { hashPassword } from "../ultis/password.js";

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
