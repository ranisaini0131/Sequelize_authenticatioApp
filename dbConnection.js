import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
    "sequelize_crud",
    "root",
    "password",
    {
        host: "localhost",
        dialect: "mysql"
    })

