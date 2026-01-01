console.log("This is my first node project")

const express=require('express')
const app=express();
const {adminAuth,userAuth}=require("./middleware/auth")
app.use("/admin",adminAuth)

app.get("/user",userAuth,(req,res,next)=>{
    res.send("User data saved")
})


app.get("/user/:userId",(req,res)=>{
    console.log(req.query)
        console.log(req.params)
    res.send({firstName:"Abhishek",lastName:"Adavi"})
})

app.post("/user",(req,res,next)=>{
    console.log("");
    // res.send("Data has been succesfully added")
    next();},
    (req,res,next)=>{
    // console.log("");
    res.send("Data has been succesfully added-2");
    next();

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