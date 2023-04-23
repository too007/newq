const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://127.0.0.1:27017/testdb',{useNewUrlParser:true })

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('database connected')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use('/api/employee',EmployeeRoute)