import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    const mongo_url = "mongodb+srv://mahithjampana004:mahith123@cluster0.58epf.mongodb.net/";
    mongoose.connect(mongo_url).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;