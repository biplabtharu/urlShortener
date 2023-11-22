import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortID:{
        type: String,
        required: true,
        unique: true,
    },
    redirectURL:{
        type:String,
        required:true
    },
    visitHistory:[
        {
            timeStamp: {
                type: Number
            }
        }
    ]
}, {timeStamps : true})

const URL = mongoose.model("URL", urlSchema);
export default URL;