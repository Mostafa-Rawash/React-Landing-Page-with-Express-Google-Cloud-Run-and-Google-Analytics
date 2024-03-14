// @/main.js
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
app.use(express.static("soft-mindset/dist"));
const DB_USER= process.env.DB_USER;
const DB_PASS= process.env.DB_PASS;
const COLLECTION= process.env.COLLECTION;
const CLUSTER_NAME=process.env.CLUSTER_NAME
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER_NAME}.1pwmlqj.mongodb.net/${COLLECTION}`;
 
// ...

const Contact = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

const Contacts = mongoose.model("usersData" , Contact);

mongoose.connect(uri);

app.post("/newClient", urlencodedParser, async (req, res) => {
  console.log({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  const newContact = new Contacts({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  const insertedContact = await newContact.save();
  console.log(insertedContact);
  return res.status(200);
});

app.listen(PORT, () => console.log("Server started on port 3000"));

