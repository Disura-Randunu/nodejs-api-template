// Node Modules
const path = require("path")

// 3rd Party Modules
const app = require("express")()
const bodyParser = require('body-parser')
const morgan = require('morgan')('common')

// Developer Modules


app.use(morgan)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


module.exports = app