// Routing
import express from "express";
const app = express()
app.get("/", (req, res)=>{
    res.send("Home page")
})
app.get("/about", (req, res)=>{
    res.send("<h1>About Us</h1>")
})
app.listen(8000, ()=>console.log("Server started on port 8000"))
