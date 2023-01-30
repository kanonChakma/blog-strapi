import cors from "cors";
import * as dotenv from 'dotenv';
import express from "express";
dotenv.config()


const app = express()
app.use(cors())
app.use(express.json());


const port = process.env.PORT || 8000
const server = app.listen(port, ()=> {
    console.log('listening in port')
})