var express=require("express");
var app=express();
var path=require("path");

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/*.*", (req, res)=>{
    res.sendFile(path.join(__dirname, req.url));
})

app.listen(3000);