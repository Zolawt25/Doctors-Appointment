const mongoose = require('mongoose');

const url ="mongodb+srv://zelalemt:46224622ze@cluster1.bbx6qjs.mongodb.net/doctorsServer"

const connectDB = async()=>{
        await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("connected to DB...")
    })
}

module.exports = connectDB