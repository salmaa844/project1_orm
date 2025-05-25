import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import User from "./user.model.js";
import Course from "./course.model.js";

const Enrollment = sequelize.define("Enrollment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Course,
      key: "id",
    },
  },
}, {
  timestamps: true,
 
});

export default Enrollment;
