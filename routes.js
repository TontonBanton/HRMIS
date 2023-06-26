const express = require('express')
const router = express.Router()
const Employee = require('./models')
console.log("Routes running")


//POST
router.post('/emp', async (req, res) => {
    const empNew = req.body
    const employee = Employee.build({
        'id': empNew.id,
        'fname': empNew.fname
    })
    try {
        await employee.save()
        res.status(200).json(employee)
    } catch(error) {
        res.json(error)
    }
})

//GET
router.get('/emp', async (req, res) => {
    const employee = await Employee.findAll()
    res.status(200).json(employee)
})

router.get('/emp/:id', async (req, res) => {
    const employee = await Employee.findOne({
        where: {
            emp_id: req.params.id
        }
    })
    res.status(200).json(employee)
})

//PUT
router.put('/emp/:id', async (req, res) => {
    const employee = await Employee.findOne({
        where: {
            emp_id: req.params.id
        }
    })
    const empUpdate = req.body
    await employee.set({
        emp_id: req.params.id,
        fname: empUpdate.fname
    })
    await employee.save()
    res.status(200).json(employee)
})

//DELETE
router.delete('/emp/:id', async (req, res) => {
    const employee = await Employee.findOne({
        where: {
            emp_id: req.params.id
        }
    })
    await employee.destroy()
    res.status(200).json({ message: "employee deleted"})
})


module.exports = router