import * as userService from './user.servise.js';


export const getAllUsers = async (req, res, next) => {
    const users = await userService.findAllUsers();
    res.json({ users });
};


export const getUserById = async (req, res, next) => {
    const{id}   = req.params;
    const user = await userService.findUserById(id);
    res.json({ user });
};


export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    await userService.deleteUserById(id);
    res.json({ message: 'User deleted successfully' });
};
