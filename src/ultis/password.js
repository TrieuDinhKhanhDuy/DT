import bcryptjs from 'bcryptjs';

export const hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
};

export const comparePassword = async (password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword);
};
