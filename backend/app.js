const express = require('express');
const connectDB = require("./db/connectDB")
const regRouter = require("./routs/users")
const doctorsRouter = require("./routs/doctors")

const app = express()

app.use(express.json())
app.use("/user", regRouter)
app.use("/api", doctorsRouter)

const start = async()=>{
    await connectDB()
    app.listen(3000, () => {
        console.log(`Server has started...`);
    });
}

start()