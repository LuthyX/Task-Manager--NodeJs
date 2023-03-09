const express = require('express');
const routes = require('./routes/task');
const app = express();
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks', routes)
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(3000 , ()=>{
            console.log("Listening on port 3000...")
        })
    }
    catch(err){
        console.log(`Error : ${err}`)
    }
}
start();

