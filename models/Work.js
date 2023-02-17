const mongoose = require("mongoose")

const workSchema  = new mongoose.Schema({
    image:{
        type: Object
       },
    title:{
        type: String,    
        require: true
    },
    description:{
        type: String
    },
    exhibition:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exhibition"
    }],
    
})

module.exports = mongoose.model("Work", workSchema)