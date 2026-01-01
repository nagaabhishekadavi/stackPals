console.log("This is my first node project")

const express=require('express')
const app=express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Abhishek",lastName:"Adavi"})
})

app.post("/user",(req,res)=>{
    console.log("");
    res.send("Data has been succesfully added")
})

app.delete("/user",(req,res)=>{
    res.send("Data has been deleted")
})
app.use("/test",(req,res)=>{
    res.send("Hello from server")
})
app.listen(3000,()=>{
    console.log("Listening ")
})