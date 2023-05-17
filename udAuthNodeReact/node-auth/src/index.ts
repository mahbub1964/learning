//require("dotenv").config();
import dotenv from "dotenv"; dotenv.config();
// const express = require("express"); //console.log("hello");
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { routes } from "./routes.js";

//import "reflect-metadata";
import { createConnection } from "typeorm";
createConnection().then(() => {
  console.log("Connected to the database");
  const app = express();

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({ origin: [
    "http://localhost:3000", // for React
    "http://localhost:8080", // for ViewJS
    "http://localhost:4200", // for Angular
  ], credentials: true,   // to allow sending and receiving cookies
  }));

  routes(app);
  app.get("/", (req: Request, res: Response) => { res.send("Hello"); });

  app.listen(8000, "localhost", () => {
    console.log("Listening to port 8000");
  });
});
