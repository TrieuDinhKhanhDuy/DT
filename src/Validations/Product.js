import Joi from "joi";
export const productSchema = Joi.object({
    title: Joi.string().required().min(3).max(255).messages({
        "string.base":"Title must be a string",
        "string.empty":"Title must not be empty",
        "string.min":"Title must have at least 3 character ",
        "string.max":"Title must have at most 255 character",
    }),
    price: Joi.number().required().min(0).messages({
        "number.base":"Number must be a number",
        "number.empty":"Number must not be empty",
        "number.min":"Number minium value is 0 ",
    }),
    description: Joi.string().required().min(3).max(255).messages({
        "string.base":"Title must be a string",
    }),
});
