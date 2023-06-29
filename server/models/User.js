import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type : String,
            require : true,
            min : 3,
            max : 50
        },
        lastName:{
            type : String,
            require : true,
        },
        email:{
            type : String,
            require : true,
            unique : true
        },
        friends:{
            type : Array,
        },
        picture:{
            type : String,
            default : ""
        },
        password:{
            type : String,
            require : true,
            min : 8,
            max : 50
        },
        location: String,
        impressions: Number,
        occupation: String

    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);
export default User;