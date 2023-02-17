const mongoose = require("mongoose")

const exhibitionSchema = new mongoose.Schema({
image:{
    type: Object
    },
title:{
    type: String,
    required: true
},
description:{
    type: String,
    required: true
},
work:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Work"
},
})

module.exports = mongoose.model("Exhibition", exhibitionSchema)