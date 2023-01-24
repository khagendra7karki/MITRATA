const express = require("express");
const bodyParser = require("body-parser");
const request = require("request")
const https = require("https")

const app2= express();
app2.use(express.static("public"))
app2.use(bodyParser.urlencoded({extended: true}));

app2.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
})
    app2.post("/",function(req,res){
        const firstName = req.body.fname;
        const lastName = req.body.lname;
        const email = req.body.email;
        console.log(firstName, lastName , email)
    

    const request = https.request(url,options, function(response){
       if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
       }else{
            res.sendFile(__dirname + "/failure.html");
       }
       
       
       
    })
    
  
})

app2.post("/failure", function(req,res){
    res.redirect("/")
})
app2.listen(3000, function() {
    console.log("Server is running on port 3000");
})

