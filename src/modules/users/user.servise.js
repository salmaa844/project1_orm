import * as userQuery from './user.data.js';
import Apperror from '../../utils/Apperror.js';

export const findAllUsers = async () => {
    const users = await userQuery.findAllUsers();
    if (!users || users.length === 0) {
        throw new Apperror("No users found", 404);
    }
    return users;
};

export const findUserById = async (id) => {
    const user = await userQuery.findUserById(id);
    if (!user) {
        throw new Apperror("User not found", 404);
    }
    return user;
};

export const deleteUserById = async (id) => {
    const user = await userQuery.findUserById(id);
    if (!user) {
        throw new Apperror("User not found", 404);
    }
    await userQuery.deleteUser(user);
    return true;
};
