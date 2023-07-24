const express = require('express')
const http = require('http')

async function start(){
    const app = express()
    app.set('port', process.env.PORT || 3005)
    
    //BODY-PARSER
    app.use(express.json())
    app.use(express.urlencoded({ extended:true }))

    //DBASE
    await require('./sql').init()

    //API ENDPOINTS
    app.use('/api', require('./api'))
    
    http.createServer(app)
        .listen(app.get('port'), () => {
            if (process.env.NODE_ENV !== 'production') {
                console.log(`Startted on http://localhost:${ app.get('port')}`)
            }
        })
    
}
start()

