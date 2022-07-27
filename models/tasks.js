import { DataTypes } from "sequelize";
import sequelize from "../conexions.js";

export const Tasks = sequelize.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})
