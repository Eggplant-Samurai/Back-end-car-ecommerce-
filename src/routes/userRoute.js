import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login
router.post("/login", userController.login);
// API - 3 Verify Email
router.get("/verify-email", userController.verifyEmail);
// API OrderPinned
router.get("/Top-Car", userController.orderPinned);
// API - Edit
router.put("/", userController.editUser);

//API - Forget Password
router.post("/password", userController.forgetPassword);

// API - SoftDelete
router.delete("/:email", userController.deleteUserEmail);

export default router;
