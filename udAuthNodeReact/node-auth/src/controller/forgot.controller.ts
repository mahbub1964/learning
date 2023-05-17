import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { createTransport } from "nodemailer";
import bcryptjs from "bcryptjs";
import { Reset } from "../entity/reset.entity.js";
import { User } from "../entity/user.entity.js";

export const ForgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const token = Math.random().toString(20).substring(2, 12);
  await getRepository(Reset).save({ email, token }); // const reset =

  const transporter = createTransport({ host: "0.0.0.0", port: 1025 });
  const url = `http://localhost:3000/reset/${token}`;

  await transporter.sendMail({
    from: "from@example.com", to: email, subject: "Reset your password!",
    html: `Click <a href="${url}">here</a> to reset your password!`,
  });

  res.send("Please check your email!"); // reset
}

export const ResetPassword = async (req: Request, res: Response) => {
  const { token, password, password_confirm } = req.body;
  if(password !== password_confirm){
    return res.status(400).send({ message: "Passwords do not match!" });
  }
  const resetToken = await getRepository(Reset).findOne({
    select: [ "email" ], where: { token: token }
  });
  if(!resetToken) {
    return res.status(400).send({ message: "Invalid link!" });
  }
  const user = await getRepository(User).findOne({
    select: ["id"], where: {email: resetToken.email}
  });
  if(!user) {
    return res.status(404).send({ message: "User not found!" });
  }
  await getRepository(User).update(user.id, {
    password: await bcryptjs.hash(password, 12)
  });
  res.send({ message: "success" });
}
