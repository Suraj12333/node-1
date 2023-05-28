import express, { response } from "express";
import routes from "./routes/user.js";
import { condb } from "./database/config.js";
import bodyParser from "body-parser";
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
condb()

app.use(bodyParser.json)

app.use(routes)


app.use("/",(req,res)=>{
    res.json({
        "msg":"hello"
    })
})









app.listen(3000,() => {
    console.log(`Server is listening http://localhost:3000`)
})

// app.use("/API",(req,res) => {res.json({msg:"SG"})})
// app.use("/VJ",(req,res) => {res.json({Server_Messaging:"VJ"})})
// app.get("https://jsonplaceholder.typicode.com/posts",() => {})





