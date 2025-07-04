import  User  from './../../../database/models/user.model.js';

export const findAllUsers = async () => {
    return await User.findAll({
        attributes: { exclude: ['password'] }
    });
};

export const findUserById = async (id) => {
    return await User.findByPk(id, {
        attributes: { exclude: ['password'] }
    });
};

export const deleteUser = async (user) => {
    return await user.destroy();
};
