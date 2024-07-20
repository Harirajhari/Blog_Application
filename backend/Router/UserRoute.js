const express = require("express");
const router = express.Router();
const UserSchema = require("../Schema/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/",(req,res)=>{
    res.send("Hello World");
})

router.post("/signup", async(req,res)=>{
    const {name , email , password , phoneNumber} = req.body;

    if (!name || !email || !password || !phoneNumber) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existUser = await UserSchema.findOne({email});
        if(existUser){
            return res.status(400).json({message:"User with this email is already exist"});
        }


        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new UserSchema({name,email,password:hashPassword,phoneNumber});

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const user = await UserSchema.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600000 });

        res.status(200).json({ message: "Login successful", token});
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;