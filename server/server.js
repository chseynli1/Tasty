const express = require("express")
const { default: mongoose } = require("mongoose")
const TastyRouter = require("./router/Tasty.routes")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://cevahirhuseynli77:14bbf05PGYzbr5hS@cluster0.3qgekmk.mongodb.net/").then(res=>{
    console.log("Connected to db")
})
app.use("/tasty", TastyRouter)
app.listen(8080, ()=>{
    console.log("Backend running on 8080")
})

// mongodb+srv://cevahirhuseynli77:14bbf05PGYzbr5hS@cluster0.3qgekmk.mongodb.net/