const express = require('express')
const http = require('http')

async function start() {
  const app = express()

  // Set default port
  app.set('port', process.env.PORT || 3005)

  // Init body-parser options (inbuilt with express)
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Add API endpoints
  app.use('/api', require('./api'))

  await require('./sql').init()

  // Listen the server
  http.createServer(app)
    .listen(app.get('port'), () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Evaluate External Data started on http://localhost:${ app.get('port') }`)
      }
    })
}
start()