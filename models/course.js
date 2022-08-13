const mongoose = require("mongoose")

const Course = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Image_url:{
        type:String,
        required:true
    },
    University_name:{
        type:String,
        required:true
    },
    Faculty_Profile:{
        type:String,
        required:true
    },Course_Duration:{
        type:Number,
        require:true
    },
    Cost:{
        type:Number,
        require:true
    },
    Sample_certificate:{
        type:String,
        required:true
    },
    Eligiblity:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('Course', Course)