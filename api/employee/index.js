const express = require('express')
const {
  Employee,
  EmployeePosition
} = require('../../sql')

const router = express.Router()

// Read
router.get('/employees', async (req, res) => {
  const data = await Employee.findAll()
  res.send({ data })
})

// Create
router.post('/employee', async (req, res) => {
  const { body } = req
  const data = await Employee.create(body)
  res.send({ data })
})

// Update
router.put('/employee/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  const data = await Employee.update(body, { where: { id }})
  res.send({ data })
})

// Delete
router.delete('/employee/:id', async (req, res) => {
  const { id } = req.params
  const data = await Employee
    .destroy({ where: { id }})
    .then(() => {
      return EmployeePosition.destroy({ where: { employeeId }})
    })
  res.send({ data })
})

module.exports = router
