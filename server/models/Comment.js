const mongoose = require('mongoose');







const commentSchema = new mongoose.Schema({
    comment: {
        type : String,
    },
    username: {
        type : String,
    },
    userId: {
        type : mongoose.Types.ObjectId
    },
    doctorId: {
        type : mongoose.Types.ObjectId
    },
    rating: {
        type: Number
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Comments", commentSchema)