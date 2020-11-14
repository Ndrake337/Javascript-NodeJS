const express = require("express");
const app = express();


app.get('/',function(req,res){
    res.send("Teste")
})


app.listen(8082,function(){
    console.log("Sevidor rodando na url http://localhost:8082");
})