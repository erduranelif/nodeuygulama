const express = require("express");

const app = express();

const port = 8080;




app.get("/", (request, response)=>{
    response.send("merhaba ben elif");

});

app.listen(port, ()=>{
    console.log("başladık");
});