import { usermodel } from "../model/usermodel.js";

export const usercontroller = {
    async adduser(req,res,next){
        try{
            const name = req.body.name
            const Email = req.body.email
            const password = req.body.password
            const mobno = req.body.mobno

            let user = new usermodel({
                name: name,
                Email: Email,
                password: password,
                mobno : mobno
            })
            const result = await user.save()
            console.log(result)
            res.json({
                success:true,
                data: result()
            })
            res.json
            ({
                "msg":"hello"
            })
        }
        catch(error){
            console.log(error)
            console.log("unable to register")
        }
    }
}
