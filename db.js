const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'employee_info',
    'root',
    '13ulas43',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const connectToDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("Successfully connected to database")
    } catch(error) {
        console.log(error)
    }
}

module.exports = {sequelize, connectToDb}