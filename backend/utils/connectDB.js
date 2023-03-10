const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const connectDB=async() =>
{
    try 
    {
        await mongoose.connect(process.env.DB_URL)
        .then(() => console.log("Database Connected"));
    } 
    catch (error){
        console.error(error);
        process.exit(1);
    }  
};

module.exports=connectDB;