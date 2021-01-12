const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const Sequelize = require("sequelize");
const UserModel = require("./models/users");

//Connect to DB
// const URL =
//   "mongodb+srv://admin:admin@mongodb-deployments.2ykdc.mongodb.net/MonggoDB-Deployments?retryWrites=true&w=majority";

// const userSchema = require("./models/users");
// const db = mongoose
//   .connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((res) => console.log(res))
//   .catch(err=> console.log("ERROR", err))

//initiaze server
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
                                //database   ,  username,   password
const sequelize = new Sequelize("binar-users", "postgres", "postgres", {
  host: "localhost",
  post: 5432,
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then((res) => console.log("connection success"))
  .catch((err) => console.log("FAILED_TO_CONNECT", err));

//TEST INSERT DATA
const user = UserModel(sequelize, Sequelize);
// user.create({name: 'budi handoko'})
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err)
// })

//ROUTES
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  let saveUser = await user.create({ username, password }); // save user to database

  res.send({ saveUser });
});

app.post("/login", (req, res) => {
  res.send("path ini sudah di jalankan");
});

//How to we start listening to the server
app.listen(3000, () => {
  console.log("Server is running on port number http://localhost:3000");
});
