const bcryptjs = require("bcryptjs"), jwt = require("jsonwebtoken");
const mongoose = require("mongoose"), User = require("../models/user.model");
const authController = {};

authController.Register = async (req, res) => {
  const {first_name, last_name, email, password, password_confirm} = req.body;
  if(password !== password_confirm){
    return res.status(400).send({ message: "Passwords do not match!" });
  }
  const user = {
    first_name, last_name, email, password: await bcryptjs.hash(password, 12)
  };
  User.create(user)
  .then(user => { console.log("NEW USER:", user);
    const {password, ...data} = user._doc; //Remove password from user using deconstruction
    res.send(data); // user
  })
  .catch(err => { //console.log(err);
    if(err.code === 11000) { console.log("MongoServer Error Code:", err.code);
      return res.status(400).send({ message: "Duplicate email!" });
    } else console.log(err);
  });
}

authController.Login = async (req, res) => {
  const {email, password} = req.body, query = {email: email};
  User.find(query)
  .then(async users => { //console.log("Found Users:", users);
    if(users.length < 1) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const user = users[0]; //console.log("User:", user);
    if(!await bcryptjs.compare(password, user.password)){
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const accessToken = jwt.sign({id: user.id}, process.env.ACCESS_SECRET||"" , {expiresIn: "30s"});
    const refreshToken = jwt.sign({id: user.id}, process.env.REFRESH_SECRET||"", {expiresIn: "1w"});
    res.cookie("access_token", accessToken, {
      httpOnly: true, maxAge: 24 * 60 * 60 * 1000  // 1 day
    });
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
    });
    //res.send({ accessToken, refreshToken });  //res.send(user);
    res.send({ message: "success" });
  })
  .catch(err => console.log(err));
}

authController.AuthenticatedUser = async (req, res) => {
  try {
    const cookie = req.cookies["access_token"]; //console.log("cookie:", cookie);
    const payLoad = jwt.verify(cookie, process.env.ACCESS_SECRET||"");
    if(!payLoad) {
      return res.status(401).send({ message: "unauthenticated" });
    }
    User.findById(payLoad.id)
    .then(user => { //console.log("Found user:", user);
      if(!user) {
        return res.status(401).send({ message: "unauthenticated" });
      }
      const {password, ...data} = user._doc; //Remove password from user using deconstruction
      res.send(data);
    })
    .catch(err => console.log(err));
  } catch(e) { //console.log("e:", e);
    return res.status(401).send({ message: "unauthenticated" });
  }
}

authController.Refresh = async (req, res) => {
  try {
    const cookie = req.cookies["refresh_token"];
    const payLoad = jwt.verify(cookie, process.env.REFRESH_SECRET||"");
    if(!payLoad) {
      return res.status(401).send({ message: "unauthenticated" });
    }
    const accessToken = jwt.sign({id: payLoad.id}, process.env.ACCESS_SECRET||"", {expiresIn: "30s"});
    res.cookie("access_token", accessToken, {
      httpOnly: true, maxAge: 24 * 60 * 60 * 1000  // 1 day
    });
    res.send({ message: "success" });
  } catch(e) {
    return res.status(401).send({ message: "unauthenticated" });
  }
}

authController.Logout = (req, res) => {
  res.cookie("access_token", "", { maxAge: 0 });
  res.cookie("refresh_token", "", { maxAge: 0 });
  res.send({ message: "success" });
}

module.exports = authController;
