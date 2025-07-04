import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        uniqe: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active"
    },
    code:{
        type:DataTypes.STRING,
    },
    isConfirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    role:{
        type:DataTypes.ENUM("admin","student"),
        defaultValue:"student"
    }
}, {
    timestamps: true
}

);
export default User;