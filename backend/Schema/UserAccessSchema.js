const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const UserAcessSchema = new Schema({
    blogname:{
        type:String,
        required:true
    },
    // This will store the HTML content
    content: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    }
})


const UserAcess = mongoose.model("UserBlog", UserAcessSchema);
module.exports = UserAcess;