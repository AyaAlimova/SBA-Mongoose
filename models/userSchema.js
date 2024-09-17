import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  age:{
    type: Number,
    required: true
   
  },

  email:{
    type: String,
    required: true,
    index: true
  },
},
{collection: "user"})


const User =  mongoose.model("User" , userSchema)
export default User