console.log("--- SQL INDEX RUNNING ---")

const { Sequelize } = require('sequelize')

module.exports = {
    sequelize: null,
    Employee: null,
    EmployeePosition: null,

    async init(){
        console.log("--- SQL INIT RUNNING ---")
        
        this.sequelize = new Sequelize(
            'employee_info',
            'root',
            '13ulas43',
            {
                dialect: 'mysql',
                host: 'localhost'
            }
        )

        try {
            await this.sequelize.authenticate()
            console.log('Connection has been successful')
            
            this.initModels()

        } catch (error) {
            console.log('Unable to connect to database', error)
        }
    },

    async initModels(){
        console.log("--- SQL INITMODELS RUNNING ---")

        const Employee = require('./models/Employee')(this.sequelize)
        this.Employee = Employee
        this.sequelize.sync({ force: false })
        console.log('Employee', this.Employee)
        
        await this.initData()
    },

    async initData(){
        const count = await this.Employee.count()
        console.log('Employess:', count)

        if (!count) {
            const emp = await this.Employee.create(
                {
                    firstName: "Daniel",
                    lastName: "Padilla"
                }
            )
        }

    }
}