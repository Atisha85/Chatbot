import mongoose from "mongoose";
import { ENV } from "./env.js"; // Load environment variables from env.js
export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV;
        if (!MONGO_URI) throw new Error("MONGO_URI is not defined in environment variables");
        
        await mongoose.connect("mongodb+srv://atishaofficial1_db_user:test123@cluster0.rblvwuu.mongodb.net/test");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};