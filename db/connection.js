const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION_STRING
mongoose.connect(connectionString).then((res)=>{
    console.log("server successfully conncted to MongoDb Atlas");
}).catch((reason)=>{
    console.log("connection failed");
    console.log(reason);
})