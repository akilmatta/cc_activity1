var express = require('express')
var app = express()

const SERVER_PORT = 3010
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded()) // for parsing application/x-www-form-urlencoded


//http://localhost:3010/
app.get('/', function(req, res) {
    res.send("<h1>Home Page</h1>")
})

//http://localhost:3010/profile
app.get('/profile', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

//http://localhost:3010/admin
app.get('/admin', (req, res) => {
    res.send('Admin Homepage')
})

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})