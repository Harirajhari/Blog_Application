const express = require("express");
const router = express.Router();
const UserAccessSchema = require("../Schema/UserAccessSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const middleware = require("../Middleware/auth")

router.get("/retrive-post", middleware , async(req,res) => {
    const userId = req.user.id;
    const blogs = await UserAccessSchema.find({ author: userId }).populate('author'); // Adjust the field name as necessary
try{
    if (!blogs.length) {
        return res.status(404).json({ message: "No blogs found for this user." });
    }

    res.status(200).json(blogs);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
}
}
);
router.post("/post-content", middleware , async(req,res)=>{
    const user = req.user.id;
    const {blogname,content} = req.body;
    if(!blogname || !content){
        res.status(400).json({message : "All fields are required"});
    }
    try{
        const newPost = new UserAccessSchema({blogname,content,author:user});
        await newPost.save();
        res.status(200).json({message : "Post Uploaded successfuly !! "});
    }catch(error){
        console.log(error);
    }
});

router.put("/post-update/:id", middleware, async (req, res) => {
    const userId = req.user.id;
    const blogId = req.params.id;
    const { blogname, content } = req.body;

    if (!blogname || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Find the blog post by ID and ensure the user is the author
        const blogPost = await UserAccessSchema.findOne({ _id: blogId, author: userId });

        if (!blogPost) {
            return res.status(404).json({ message: "Blog post not found or you are not the author" });
        }

        // Update the blog post
        blogPost.blogname = blogname;
        blogPost.content = content;

        await blogPost.save();

        res.status(200).json({ message: "Post updated successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});



router.delete("/post-delete/:id", middleware, async (req, res) => {
  const user = req.user.id;
  const blogId = req.params.id;
  try {
    const blogPost = await UserAccessSchema.findOne({
      _id: blogId,
      author: user,
    });
    if (!blogPost) {
      return res
        .status(404)
        .json({ message: "Blog post not found or you are notthe author" });
    }
    await blogPost.deleteOne();
    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/getallblogs', async(req,res) => {
    try{
    const blogs = await UserAccessSchema.find();
    //console.log(blogs);
    res.status(200).json({ blogs });
    }
    catch(error){
        console.log(error);
    }
    
});


module.exports = router;