const bcryptjs = require("bcryptjs"), jwt = require("jsonwebtoken");
const mongoose = require("mongoose"), { createTransport } = require("nodemailer");
const User = require("../models/user.model"), Reset = require("../models/reset.model");
const forgotController = {};

forgotController.ForgotPassword = async (req, res) => {
  const { email } = req.body;
  const token = Math.random().toString(20).substring(2, 12);
  //await getRepository(Reset).save({ email, token }); // const reset =
  Reset.create({email, token})
  .then(async reset => { console.log("NEW RESET:", reset);
    //const transporter = createTransport({ host: "0.0.0.0", port: 1025 }); //MailHog
    const transporter = createTransport({ host: "smtp.gmail.com", port: 465, secure: true,
      auth: { type: "OAuth2", user: process.env.GMAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENT_ID, clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN, accessToken: process.env.OAUTH_ACCESS_TOKEN
    } });
    const url = `http://localhost:3000/reset/${reset.token}`;
    // await transporter.sendMail({
    //   from: "from@example.com", to: reset.email, subject: "Reset your password!",
    //   html: `Click <a href="${url}">here</a> to reset your password!`,
    // });
    const mailOptions = {
      from: process.env.GMAIL_USERNAME, to: reset.email, //"mahbubur.rahman.64@gmail.com",
      subject: "Reset your password!",
      html: `Click <a href="${url}">here</a> to reset your password!`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if(err){ console.log(err);
        console.log("Mail could not be sent to " + reset.email);
      } else { console.log("info:", info);
        res.send("Please check your email!"); // reset
      }
    });
  })
  .catch(err => console.log(err));
}

forgotController.ResetPassword = async (req, res) => {
  const { token, password, password_confirm } = req.body, query = {token};
  if(password !== password_confirm){
    return res.status(400).send({ message: "Passwords do not match!" });
  }
  Reset.findOne(query)
  .then(async resetToken => { //console.log("resetToken:", resetToken);
    if(!resetToken) {
      return res.status(400).send({ message: "Invalid link!" });
    }
    User.findOne({email: resetToken.email})
    .then(async user => { //console.log("user:", user);
      if(!user) {
        return res.status(404).send({ message: "User not found!" });
      }
      user.password = await bcryptjs.hash(password, 12); user.save();
      Reset.deleteOne({_id: resetToken._id}).then(info => { //console.log(info)
      }).catch(err => console.log(err)); // resetToken.remove();
      res.send({ message: "success" });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
}

module.exports = forgotController;
