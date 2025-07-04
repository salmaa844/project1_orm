import { DataTypes } from "sequelize";
import sequelize from "../config.js";


const Course = sequelize.define("Course", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,


    },
    describtion: {
        type: DataTypes.TEXT,

    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

}, {
    timestamps: true
})

export default Course;