import mongoose from "mongoose";
export const condb = async() => {
    try
    {
        let sg = await mongoose.connect("mongodb+srv://surajgaud59356:Surajvru123@sgcluster1.zrrrofd.mongodb.net/sample?retryWrites=true&w=majority")
        console.log("Database connection Sucessfull ...")
    }
    catch(error)
    {
        console.log(error)
    }
}