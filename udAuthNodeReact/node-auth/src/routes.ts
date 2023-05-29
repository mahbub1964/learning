import { Router } from "express";
import { AuthenticatedUser, GoogleAuth,
  Login, Logout, Refresh, Register } from "./controller/auth.controller.js";
import { ForgotPassword, ResetPassword } from "./controller/forgot.controller.js";

export const routes = (router: Router) => {
  router.post("/api/register", Register);
  router.post("/api/login", Login);
  router.get("/api/user", AuthenticatedUser);
  router.post("/api/refresh", Refresh);
  router.post("/api/logout", Logout);
  router.post("/api/google-auth", GoogleAuth);
  router.post("/api/forgot", ForgotPassword);
  router.post("/api/reset", ResetPassword);
};