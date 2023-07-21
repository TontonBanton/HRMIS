console.log("--- MODEL EMPLOYEE RUNNING ---")

const { DataTypes, Sequelize } = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('employee',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull : false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull : false
        },
    },
    { 
        freezeTableName: true,
        timestamps: false
    }
    )
}