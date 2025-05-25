import sequelize from "./config.js";
import "./association.js"

const connectiondb = async () => {
    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
          await sequelize.sync({ alter: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectiondb ;