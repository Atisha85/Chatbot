import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import "../lib/env.js"; // Load environment variables from env.js
export const signup = async (req, res) => {
    console.log("Signup API hit");
    const {fullName, email, password} = req.body;

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        //check if emails valid: regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format"});
        }

        const user = await User.findOne({email});
        if (user) return res.status(400).json({message: "Email already in use"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        })

        if(newUser){
           // generateToken(newUser._id, res);
           // await newUser.save();

            //Persist user first, then issue auth cookie
            const savedUser = await newUser.save();
            console.log("User saved:", savedUser);
            generateToken(savedUser._id, res);
            res.status(201).json({
                _id: savedUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });

            // todo: send welcome email to user
            try {
                sendWelcomeEmail(savedUser.email, savedUser.fullName, ENV.CLIENT_URL);
            } catch (error) {
                console.error("Error sending welcome email:", error);
            }

        } else {
            res.status(400).json({message: "Invalid user data"})  ;
        }
    }
    catch(error){
        console.log("Error in signup controller:", error);
        res.status(500).json({message: "Internal Server error"});
    }
};


export const login = (req, res) => {
    res.send("Login endpoint");
  // Handle login logic here
};