import Apperror from "../../utils/Apperror.js";
import * as authQuery from "./auth.data.js"
import * as hashings from "./../../utils/hashing/hash.js"
import { generateCode } from "../../utils/generatecode.js";
import { sendEmail } from "../../utils/email/nodemailer.js";
import { generateToken } from "../../utils/jwt/generateToken.js";
import { sendSystemEmail } from "../../utils/email/sendEmail.js"
export const register = async ({ name, email, password, role = "student" }) => {
    const existingUser = await authQuery.findUserByEmail(email);
    if (existingUser) {
        throw new Apperror("email in use", 409)

    }
    const hashPassword = await hashings.hash(password);
    const code = generateCode(5);
    // await sendEmail({
    //     to:email,
    //     subject:"confirm email",
    //     html:`your code ${code}`
    // })
    await sendSystemEmail("confirmEmail", email, code);
    const newUser = await authQuery.createUser({
        name,
        email,
        password: hashPassword,
        code,
        isConfirmed: false,
        role
    });
    return {
        name: newUser.name,
        email: newUser.email
    };
}
export const login = async ({ email, password }) => {

    const user = await authQuery.findUserByEmail(email);
    if (!user) throw new Apperror("invaled data", 401)
    const compare = await hashings.compareHash(password, user.password);
    if (!compare) throw new Apperror("invaled data", 401);

    const token = generateToken({
        id: user.id,
        name: user.name,
        email: user.email
    })

    return token;
}

export const confirmEmail = async ({ email, code }) => {
    const user = await authQuery.findUserByEmail(email);

    if (!user) throw new Apperror("User not found", 409);

    if (user.isConfirmed) throw new Apperror("Email is already confirmed", 400);

    if (user.code !== code) throw new Apperror("Invalid confirmation code", 400);

    await authQuery.confirmEmail(email);

    return true;
};
