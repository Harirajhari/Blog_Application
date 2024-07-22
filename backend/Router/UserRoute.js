const express = require("express");
const router = express.Router();
const UserSchema = require("../Schema/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../Middleware/auth")
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/",(req,res)=>{
    res.send("Hello World");
})

router.post("/signup", upload.single('profile_pic'), async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existUser = await UserSchema.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        // Create new user object
        const newUser = new UserSchema({
            name,
            email,
            password: hashPassword
        });

        // If a profile picture is provided, add it to the user object
        if (req.file) {
            newUser.profile_pic = req.file.buffer;
        }

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


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
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600000 });

        res.status(200).json({ message: "Login successful", token});
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.put("/update",  upload.single('profile_pic'), middleware , async(req,res) =>{
    const userId = req.user.id;
    const {name,email,password} = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "All fields are required except password" });
    }

    try {
        const user = await UserSchema.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        user.email = email;
        
        if (req.file) {
            user.profile_pic = req.file.buffer;
        }
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error during updating user:", error);
        res.status(500).json({ message: "Something went wrong" });
    }

});
router.delete("/delete", middleware , async (req, res) => {

    const userId = req.user.id;

    try {
        const user = await UserSchema.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/getalluser', async(req,res) => {
    try{
    const users = await UserSchema.find();
    //console.log(users);
    res.status(200).json({ users });
    }
    catch(error){
        console.log(error);
    } 
});


router.get('/user-detail', middleware,async(req,res) => {
    try{
        const userId = req.user.id;
    const user = await UserSchema.findById(userId);
    //console.log(users);
    res.status(200).json({ user });
    }
    catch(error){
        console.log(error);
    }
    
});

module.exports = router;