//onserver.js
//always on server

const express = require("express");
const server = express();
const PORT = 3000;


server.all("/", (req, res) => {
  res.send("Connected.") //message to server
})

function alwaysOn(){
  server.listen(PORT, ()=>{console.log("Activated Server")});
}

module.exports = alwaysOn;
