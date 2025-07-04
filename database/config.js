import { Sequelize } from "sequelize";
import 'dotenv/config.js'
const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD, {
  host:process.env.HOST,
  dialect:'mysql' ,
  logging:false
});

export default sequelize;