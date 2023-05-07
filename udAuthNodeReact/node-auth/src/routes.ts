import { Router } from "express";
import { Login, Register } from "./controller/auth.controller.js";

export const routes = (router: Router) => {
  router.post("/api/register", Register);
  router.post("/api/login", Login);
};