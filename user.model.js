import { DataTypes } from "sequelize";
import { sequelize } from "./dbConnection.js";

//define() defines a model, which represents  table
const user = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//add the model to the database
user.sync().then(() => {
    console.log("User table is created successfully");
}).catch((error) => {
    console.log("Unable to create table: ", error);
})
