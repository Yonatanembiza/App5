const express= require("express");
const app= express();

app.set("port", 3000); // hard code at one place
let port= app.get("port");

app.listen(port);
console.log("listening at port: ", port);