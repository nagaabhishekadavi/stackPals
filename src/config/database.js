const mongoose=require('mongoose')

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://nagaabhishekadavi_db_user:poydxAouvsgEnPnC@clusternode.cxchpkt.mongodb.net/stackPals")
console.log("DB connected ")
}

module.exports={connectDB}


// .then(()=>{
// console.log("DB connected ")
// }).catch((err=>{

// }))