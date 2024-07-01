
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String, 
        required: true, 
        unique: true
    }, 
    name:{
        type: String, 
        default: ""
    }, 
    profileUrl:{
        type:String, 
        required: true
    }, 
    avatarUrl: {
        type:String,
    }, 
    likedProfiles: {
        type:[String], 
        default: []
    }, 
    likedBy: [
        {
            username: {
                type:String, 
                required: true
            }, 
            avatarUrl: {
                type:String,
            }, 
            likeDate: {
                type:Date, 
                default:Date.now
            }
        }
    ]
}, {timestamps : true})


const User = mongoose.model('user', userSchema); 

export default User; 

