
const express = require('express')
const router = express.Router()

//TEST
console.log("--API INDEX RUNNING --")
router.get('/', (req, res) => {
    res.send({data: "API ROUTER"})
})

router.use(require('./employee'))

module.exports = router