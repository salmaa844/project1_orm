import express from "express";
import 'dotenv/config'
import connectiondb from "./database/connection.js"
const app = express();

const port = process.env.PORT || 50000;

await connectiondb ().then(()=>{
    console.log("connection to db")
});
app.listen(port,()=>{
    console.log(`server is running from port ${port}`);
})