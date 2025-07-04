import User from "../../../database/models/user.model.js";

export const findUserByEmail = async(email)=>{
    const user = await User.findOne({
        where: {
            email
        }
    })
    return user;
};

export const createUser = async(data)=>{
    const user = await User.create(data);
    return user;
};

export const confirmEmail = async (email) => {
  await User.update(
    {
      code: null,
      isConfirmed: true,
    },
    {
      where: { email },
    }
  );
};

