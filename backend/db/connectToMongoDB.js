import mongoose from 'mongoose'

const connectToMongoDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Database Connection Successful!")

    }catch(e){
        console.log(e.message)
    }
}

export default connectToMongoDB;

