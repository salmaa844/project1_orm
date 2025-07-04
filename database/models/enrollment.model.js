import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Enrollment = sequelize.define("Enrollment", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", 
      key: "id",
    },
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Course", 
      key: "id",
    },
  },
}, {
  timestamps: true,
  tableName: "Enrollment" 
});

export default Enrollment;
