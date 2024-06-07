const express = require ("express")
//  const UserRoute = require("./route/usersRoute")
 const bodyparser = require("body-parser")
 const User = require ("./models/users")

//  const mongoose = require ("mongoose")


const app = express()

app.use (bodyparser.json())
app.use (express.json())
//static file
app.use(express.static("public"))

//set views ejs
app.set("views" ,'./views')
app.set("view engine", 'ejs')

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', async (req, res) => {
  const { username, email, dateOfBirth } = req.body;
  const user = new User({ username, email, dateOfBirth });
  await user.save();
  res.render('success');
});
// app.use("/api/v1/user", UserRoute )






// cronJob ()



module.exports = app