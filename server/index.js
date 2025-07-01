const express = require('express')
const app = express()

app.use("/", (req,res)=>{
    res.send("<h1>Hellow from backend</h1>")
})
const PORT = 8080
app.listen(PORT, ()=>{
    console.log("server is runing successfully on port 8080")
})