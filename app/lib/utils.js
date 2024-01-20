import mongoose from "mongoose";

export const connectToDb = async () => {
    const connection = {}
    try {
        if(connection.isConnected) return ;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState
        console.log("Connected to the database");
      } catch (error) {
        console.error("Error connecting to the database:", error);
        throw new Error(error)
      }
}