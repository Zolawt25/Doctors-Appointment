const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    
},{
    timestamps: true
})

module.exports = mongoose.model("Doctors", doctorSchema)