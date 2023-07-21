const express = require('express')
const http = require('http')

async function start(){
    const app = express()
    app.set('port', process.env.PORT || 3005)
    
    //BODY-PARSER
    app.use(express.json())
    app.use(express.urlencoded({ extended:true }))

   //API ENDPOINTS
    app.use('/api', require('./api'))

    //DBASE
    await require('./sql').init()
    
    //TEST
    app.get('/', (req, res) => {
        res.send({data: "Hello"})
    })
    
    http.createServer(app)
        .listen(app.get('port'), () => {
            if (process.env.NODE_ENV !== 'production') {
                console.log(`Startted on http://localhost:${ app.get('port')}`)
            }
        })
    
}
start()

