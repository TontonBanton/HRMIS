const { Sequelize } = require('sequelize')

module.exports = {
  sequelize: null,

  Employee: null,
  EmployeePosition: null,

  async init() {
    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: `${ __dirname }/sqldb.sqlite`,
    })

    try {
      await this.sequelize.authenticate()
      console.log('Connection has been established successfully.')

      await this.initModels()
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  },

  async initModels() {
    const Employee = require('./models/Employee')(this.sequelize)
    const EmployeePosition = require('./models/EmployeePosition')(this.sequelize)

    Employee.hasMany(EmployeePosition, { as: 'Positions', foreignKey: 'employeeId' })

    this.Employee = Employee
    this.EmployeePosition = EmployeePosition
    this.sequelize.sync({ force: false })

    await this.initData()
  },

  async initData() {
    const count = await this.Employee.count()

    console.log(`Employees`, count)

    if (!count) {
      const emp = await this.Employee.create({
        firstName: 'Daniel',
        lastName: 'Padilla'
      })

      console.log(emp)
    }
  }
}