import { DataTypes } from "sequelize";
import sequelize from "../config.js";


const Review = sequelize.define("Review", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false

    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true
})

export default Review;