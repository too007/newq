const mongoose = require('mongoose')

const Schema = mongoose.Schema 


const employeeSchema =  Schema({
    name: {
        type:String 
    },
    price: {
        type:Number
    },
    // qty: {
    //     type:Number
    // },
    dis: {
        type:String
    },
    avatar: {
        type : String
    }
}, { timestamps: true })

const Employee = mongoose.model('chenderi', employeeSchema)
module.exports = Employee