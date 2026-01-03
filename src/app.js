console.log("This is my first node project")

const express=require('express')
const app=express();
const {adminAuth,userAuth}=require("./middleware/auth")

const {UserModal}=require("./models/user.js")

app.use(express.json())


app.delete("/user",async(req,res,next)=>{
const userId=req.body.userId;

try{
await UserModal.findByIdAndDelete(userId);
res.send("User have been sucessfully deleted ")

}
  catch(err){
        res.status(400).send("User Deletion failed")
    }

})


app.get("/feed",async(req,res,next)=>{
    


   try {
        const users= await UserModal.find({})
        res.send(users)
    

    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})



app.get("/user",async(req,res,next)=>{
    const emailId=req.body.emailId

    const users= await UserModal.find({emailId})
   try 
   { if(users.length){
        res.send(users)
    }
   else  if(users.length===0){
        res.send("User found")
    }}
    catch(err){
        res.status(400).send("Something went wrong")
    }
})
app.post("/signup",async (req,res)=>{
    // const usrObj={
    //     firstName:"Abhishek",
    //     lastName:"Adavi",
    //     emailId:"adavi@abhi.com",
    //     password:"abhi@123"
    // }
    const user=new UserModal(req.body)
    try{
    await user.save();
    res.send("Signin details saved successfully")}
    catch(error){ res.status(401).send("Signin failed")}
    
})

const {connectDB}=require( "./config/database")
connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("Listening ")
})
}).catch((err)=>{
    console.log("DB error")
})


// app.get("/getUserData",(req,res)=>{
//     throw new Error("Something went erong")
// })


// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.status(500).send("Something went wrong")
//     }
// })










// app.use("/admin",adminAuth)

// app.get("/user",userAuth,(req,res,next)=>{
//     res.send("User data saved")
// })


// app.get("/user/:userId",(req,res)=>{
//     console.log(req.query)
//         console.log(req.params)
//     res.send({firstName:"Abhishek",lastName:"Adavi"})
// })

// app.post("/user",(req,res,next)=>{
//     console.log("");
//     // res.send("Data has been succesfully added")
//     next();},
//     (req,res,next)=>{
//     // console.log("");
//     res.send("Data has been succesfully added-2");
//     next();

// })

// app.delete("/user",(req,res)=>{
//     res.send("Data has been deleted")
// })
// app.use("/test",(req,res)=>{
//     res.send("Hello from server")
// })
