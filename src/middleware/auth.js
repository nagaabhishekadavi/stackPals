const adminAuth=(req,res,next)=>{
    console.log("Admin check");
    const token="xyz";
    const isAdminAuthorized=token==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized")
    }
    else{
        next();
    }
}
const userAuth=(req,res,next)=>{
    console.log("Admin check");
    const token="xyz";
    const isAdminAuthorized=token==="xyza";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized")
    }
    else{
        next();
    }

}
module.exports={adminAuth,userAuth}