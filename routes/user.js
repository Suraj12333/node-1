import express from "express";
import { usercontroller } from "../controller/usercontroller.js";
const routes=express.Router()
routes.post(
    "/adduser",
    usercontroller.adduser
)
routes.get(
    "/getuser",(req,res)=>{
        res.json({
            "msg":"hello"
        })
    }
)
routes.put(
    "/putuser"
)
routes.delete(
    "/userdelete"
)
export default routes