import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    passwordHash: {type: String }
    

})



const User = mongoose.model("User", userSchema);
export default User;