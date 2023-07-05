const {
  DataTypes,
  Sequelize
} = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('employee_position', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    salaryMode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    charge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true
  })
}