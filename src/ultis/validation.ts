import { z } from "zod";

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(255),
})
export const registerSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(255),
    confirmPass:z.string().min(6).max(255),
}).refine(data => data.password === data.confirmPass,{
    message:"Nhập lại mật khẩu không khớp",
    path:['confirmPass']
})