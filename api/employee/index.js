const express = require("express")
const router = express.Router()
const { Employee }  = require('../../sql')

//TEST
console.log("--API EMPLOYEE INDEX RUNNING --")
router.get('/test', (req, res) => {
    res.send({data: "API EMPLOYEE ROUTER"})
})

router.get('/emp', async (req, res) => {
    const data = await Employee.findAll()
    res.send({ data })
})    

router.post('/emp', (req, res) => {
    res.send({date: "User Created"})
})

router.put('/emp', (req, res) => {
    res.send({date: "User Updated"})
})

router.delete('/emp', (req, res) => {
    res.send({date: "User Deleted"})
})

module.exports = router