import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try{

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)

    }catch(e){
        console.error("Error in getUsersForSidebar",e)
        res.status(500).json({e:"Internal Server Error"})
    }
}