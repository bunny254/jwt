const express= require('express');
const app = express();
app.use(express.json());

//Create fake users
const users= [
    {
        id:1,
        username:"kanyi",
        password:"Kevkanyi",
        isAdmin:true
    },
    {
        id:2,
        username:"terry",
        password:"Tmwangi",
        isAdmin:false
    },
]

app.post("/api/login", (req,res)=>{
    const {username, password} = req.body;
    //find user inside array
    
})

app.listen(5000,()=>{
    console.log("Server running successfully!");
})