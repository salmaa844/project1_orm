import express from "express";
import 'dotenv/config'
import connectiondb from "./database/connection.js"
import { init } from "./src/routes.js";
import { sendEmail } from "./src/utils/email/nodemailer.js";
const app = express();

const port = process.env.PORT || 5000;

init(express,app);
await connectiondb ().then(()=>{
    console.log("connection to db")
});
await sendEmail({
   
    to:"alisalmaa455@gmail.com",
    subject:"test",
    html:"<h1>hi from code</h1>"
})
app.listen(port,()=>{
    console.log(`server is running from port ${port}`);
})