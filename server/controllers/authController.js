import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";

const register = async (req, res) => {
    try{
        const{
            firstname,
            lastname,
            email,
            password,
            occupation,
            location
        } = req.body;
        const salt = await bcrypt.gensalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstname,
            lastname,
            password : passwordHash,
            email,
            picture,
            friends,
            location,
            occupation,
            friends
        })

        const savedUser = newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err){
        res.status(500).json({err: err.message})
    }

}


const login = async (req, res) => {
        try {
            const{
                email,
                password
            } = req.body;
            const user = await User.FindOne({email: email})
            if (!user) return res.status(400).json({msg : "User not found"})
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({msg : "Wrong Password"})
            } 
        catch (err) {
                
            }
}