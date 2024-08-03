import Joi from "joi";
export const authSchema = Joi.object({
    email: Joi.string().required().email().messages({
        "string.base":"Title must be a string",
        "string.empty":"Title must not be empty",
        "string.email":"Email must be a valid email"
    }),
    password:Joi.string().required().min(6).messages({
        "string.base":"password must be a string",
        "string.empty":"password must not be empty",
        "string.min":"password must have at least 6 character"
    }),
    username:Joi.string().messages({
        "string.base":"username must be a string",
    })
})