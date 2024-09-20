import dotenv from 'dotenv';
import app from './src/app/app.js';

dotenv.config();

const HOST = process.env.HOST || "localhost"

const PORT = process.env.PORT || 8080

app.listen(PORT, HOST, function(){
    console.log(`Server Started On - ${HOST}:${PORT}`)
})