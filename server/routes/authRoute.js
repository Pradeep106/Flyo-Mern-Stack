const express = require("express");
const router = express.Router();
const authController = require("../controller/Auth");

// Route for user sign-up
router.post("/signup", authController.Auth);

// Route for user login
router.post("/login", authController.login);

module.exports = router;
