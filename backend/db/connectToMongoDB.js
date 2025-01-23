import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/chat-app");
        console.log("App connected to database");
    } catch (error) {
        console.log(error)  
    }
}

export default connectToMongoDB;
