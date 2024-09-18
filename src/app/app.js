// Node Modules
const path = require("path")

// 3rd Party Modules
const app = require("express")()
const bodyParser = require('body-parser')
const { errorHandlerMiddleware } = require("../common/middlewares/errorMiddleware")
const morgan = require('morgan')('common')

// Developer Modules


app.use(morgan)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(errorHandlerMiddleware)

app.get('/', (req, res) => {
    res.send('Made With ❤ In Sri Lanka')
})
  
module.exports = app