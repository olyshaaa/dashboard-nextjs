import {User} from "./models"
import {connectToDb} from "./utils"

export const fetchUsers = async (q) =>{
    console.log(q)

    const regex = new RegExp(q, "i")
    try{
        console.log("Fetching users...");
        await connectToDb()
        const users = await User.find({username:{$regex: regex}})
        return users
        console.log("Users fetched successfully");
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users")
    }
}