// const express = require("express"); //console.log("hello");
import express, { Request, Response } from "express";
import { routes } from "./routes.js";

//import "reflect-metadata";
import { createConnection } from "typeorm";
createConnection().then(() => {
  console.log("Connected to the database");
  const app = express();

  app.use(express.json());

  routes(app);
  app.get("/", (req: Request, res: Response) => { res.send("Hello"); });

  app.listen(8000, "localhost", () => {
    console.log("Listening to port 8000");
  });
});
