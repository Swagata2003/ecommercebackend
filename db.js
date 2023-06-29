// require('dotenv').config('../.env')
const mongoose=require("mongoose")
const mongoURI=process.env.mongoURI

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{console.log("Connection successful")}).catch((err)=>{console.log("Connection unsuccessful!")})
}

module.exports=connectToMongo