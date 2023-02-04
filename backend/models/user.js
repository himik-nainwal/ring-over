const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    jobId: {
      type: String,
      required: true,
      unique:true
    },
    resumeLink: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    }
  });

const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    profilePicUrl:{
        type: String,
    },
    cloudinaryId :{
        type:String,
    },
    role : {
        type: String,
        default: "user",
        enum: ["user","admin","root"],
    },
    resetToken: {
        type: String,
    },
    expireToken: {
        type: Date,
    },
    requests: [RequestSchema]
},
{
    timestamps: true
}
);

module.exports= mongoose.model(mongoose.models.User || "User",UserSchema);