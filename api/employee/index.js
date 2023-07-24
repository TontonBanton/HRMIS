const express = require("express")
const router = express.Router()
const { Employee, EmployeePosition }  = require('../../sql')


//GET 
router.get('/emp', async (req, res) => {
    const data = await Employee.findAll() 
     res.send({ data })
})

//GET SINGLE
router.get('/emp/:id', async (req, res) => {
    const { id } = req.params
    data = await Employee.findOne({ where: { id } })
    res.send({ data })
})

//POST
router.post('/emp', async (req, res) => {
    const { body } = req
    const data = await Employee.create(body)
    res.send({ data })
})

//PUT
router.put('/emp/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    const data = await Employee.update(body, { where: { id } } )
    res.send({ data })
})

//DELETE
router.delete('/emp/:id', async (req, res) => {
    const { id } = req.params
    data = await Employee.destroy({ where: { id } })
    res.send({ data })
})

module.exports = router