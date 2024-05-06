require("dotenv").config();
const express = require("express");
// import express from "express"; used for module fucntion
const app = express();
const port = 4000;
// get send request isme ek req hai or ek callback hai jo data trasnfer kr raha hai
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//req=request,  res=response
app.get("/twitter", (req, res) => {
  res.send("something");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
