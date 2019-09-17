const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sendGrid = require('@sendgrid/mail')

const app = express()

app.use(bodyParser.json())
app.use(cors())
// req: request, res: response
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // change later to only allow our serve
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// we have 2 routes
// 1st is GET request: to get data to the server
// will take 2 arguments; the actual path and callback function which will take 3 args itself
app.get('/api', (req, res, next) => {
    // send for sending info and in this case its for sending text
    res.send('API Status: Listening...')
})

// 2nd is POST request: to put/send data to the server
// taking 2 args: the route/path and the callback function with 3 args itself
app.post('/api/email', (req, res, next) => {
    // API key is found my creating sendGrid account
    sendGrid.setApiKey('API_KEY')

    const msgSent = {
        to: 'khalilaudeh361997@gmail.com',
        from: req.body.email,
        subject: 'Portfolio Contact',
        text: req.body.msg
    }

    // send the message and inform the front-end if the msg was sent or NOT
    sendGrid.send(msgSent)
        .then(result => {
            // 200: means the browser knows everything works properly 
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {
            console.log('error: ', err)
            // 401: ERROR exists
            res.status(401).json({
                success: false
            })
        })
})


// we have to do the listen function so that we can run and it can listen to us at a port of our own
// 1997: port number of our choice
// localhost: '0.0.0.0'
app.listen(3030, '0.0.0.0')

// NOTE; in the terminal: everytime we update our code we have to run node app.js again
// BUT with 'npm run serve' we can keep running and update our code and the change will be shown
