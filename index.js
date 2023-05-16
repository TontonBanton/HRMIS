const Sequelize = require('sequelize');
const sequelize = new Sequelize('employee_info','root', '13ulas43', {
    host: 'localhost',
    dialect: 'mysql'
});

const Employee = sequelize.define('employee', {
    emp_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fname:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false    
    },
    mname:{
        type: Sequelize.DataTypes.STRING
    },
    lname:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false    
    },
    bdate:{
        type: Sequelize.DataTypes.DATE
    }, 
    datehired:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false   
    }, 
    position:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false    
    },
    joblevel:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false    
    },
    salary:{
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false    
    },
    salarymode:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false    
    },
    area:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false    
    }
},
{
    freezeTableName: true,
    timestamps: false
}
);

Employee.sync({alter: true}).then((data) => {
    console.log("Table and model created successfully");
}).catch((err) => {
    console.log("Error syncing the table and model");
});;