require("dotenv").config()

const app = require("./src/app/app")

const HOST = process.env.HOST || "localhost"

const PORT = process.env.PORT || 8080

app.listen(PORT, HOST, function(){
    console.log(`Server Started On - ${HOST}:${PORT}`)
    
})