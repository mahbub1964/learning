const express = require("express"), router = express.Router();
const authController = require("./controller/auth.controller");
const forgotController = require("./controller/forgot.controller");

router.post("/api/register", authController.Register);
router.post("/api/login", authController.Login);
router.get("/api/user", authController.AuthenticatedUser);
router.post("/api/refresh", authController.Refresh);
router.post("/api/logout", authController.Logout);
router.post("/api/forgot", forgotController.ForgotPassword);
router.post("/api/reset", forgotController.ResetPassword);

router.get("/testing", (req, res) => res.send("Testing routes"));

module.exports = router
