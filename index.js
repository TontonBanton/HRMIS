const express = require('express')
const app = express()
app.use(express.json())

//ROUTER
const apiRoutes = require('./routes')
app.use('/api',apiRoutes)

//DATABASE
const {sequelize, connectToDb} = require('./db')

//TEST
app.get('/', (req, res) => {
    res.status(200).json({ message: "TEST OK"})
})

const PORT = 3000
app.listen(PORT, async () => {
    console.log(`Server listening at port ${PORT}`)
    await connectToDb();
})