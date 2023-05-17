import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcryptjs from "bcryptjs";
//import { sign } from "jsonwebtoken";
import jwt from "jsonwebtoken"; //console.log("jwt:", jwt);
import { User } from "../entity/user.entity.js";

export const Register = async (req: Request, res: Response) => {
  const body = req.body;
  if(body.password !== body.password_confirm){
    return res.status(400).send({ message: "Passwords do not match!" });
  }
  const { password, ...user } = await getRepository(User).save({ //Remove password from user using deconstruction
    first_name: body.first_name, last_name: body.last_name, email: body.email,
    password: await bcryptjs.hash(body.password, 12)
  });
  res.send(user);
};

export const Login = async (req: Request, res: Response) => {
  //const body = req.body;
  const user = await getRepository(User).findOne({
    select: ["id", "email", "password"],
    where: {email: req.body.email}
  });
  if(!user) {
    return res.status(400).send({ message: "Invalid credentials" });
  }
  if(!await bcryptjs.compare(req.body.password, user.password)){
    return res.status(400).send({ message: "Invalid credentials" });
  }
  const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_SECRET||"" , { expiresIn: "30s" });
  const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET||"", { expiresIn: "1w" });
  res.cookie("access_token", accessToken, {
    httpOnly: true, maxAge: 24 * 60 * 60 * 1000  // 1 day
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
  });
  //res.send({ accessToken, refreshToken });  //res.send(user);
  res.send({ message: "success" });
}

export const AuthenticatedUser = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies["access_token"];
    const payLoad: any = jwt.verify(cookie, process.env.ACCESS_SECRET||"");
    if(!payLoad) {
      return res.status(401).send({ message: "unauthenticated" });
    }
    const user = await getRepository(User).findOne({
      select: ["id", "first_name", "last_name", "email", "password"], //
      where: {id: payLoad.id}
    });
    if(!user) {
      return res.status(401).send({ message: "unauthenticated" });
    }
    const { password, ...data } = user; //Remove password from user using deconstruction
    res.send(data);
  } catch(e) {
    return res.status(401).send({ message: "unauthenticated" });
  }
}

export const Refresh = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies["refresh_token"];
    const payLoad: any = jwt.verify(cookie, process.env.REFRESH_SECRET||"");
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

export const Logout = (req: Request, res: Response) => {
  res.cookie("access_token", "", { maxAge: 0 });
  res.cookie("refresh_token", "", { maxAge: 0 });
  res.send({ message: "success" });
}
