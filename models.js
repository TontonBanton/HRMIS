const {sequelize, connectToDb} = require('./db')
const DataTypes = require('sequelize')
console.log("Model running")

const Employee = sequelize.define('employee', {
    emp_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fname:{
        type: DataTypes.STRING,
        allowNull: false    
    }
    /*mname:{
        type: DataTypes.STRING
    },
    lname:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    bdate:{
        type: DataTypes.DATE
    }, 
    datehired:{
        type: DataTypes.DATE,
        allowNull: false   
    }, 
    position:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    joblevel:{
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    salary:{
        type: DataTypes.FLOAT,
        allowNull: false    
    },
    salarymode:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    area:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    department:{
        type: DataTypes.STRING,
        allowNull: false    
    }*/
},
{
    freezeTableName: true,
    timestamps: false
}
)

//sequelize.sync()
module.exports = Employee