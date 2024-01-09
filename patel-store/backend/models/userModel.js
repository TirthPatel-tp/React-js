const mongoose = require("mongoose")
const bcrypt= require("bcryptjs")


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,"Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: [6,"Please enter atleast 6 characters"]
      
    },
    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: "https://www.freeimages.com/photo/a-businessman-spins-a-cd-on-his-finger-2109575",
    },
    phone: {
        type: String,
        default: "+1",
    },
    bio: {
        type: String,
        maxLength: [250,"Please enter less than 250 characters"],
        default: "bio",
    },
},{
    timestamps: true,
});

    // Encrypt password before saving tp DB
    userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next
    }

    //Hashed password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(this.password, salt)   // adding the salt after the password
     this.password == hashedPassword
})

const User= mongoose.model("User", userSchema)
module.exports = User