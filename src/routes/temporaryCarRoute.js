import express from "express";
import temporaryCarController from "../controllers/temporaryCarController.js";
import adminAuthenticateMiddleware from "../middleware/adminAuthenticateMiddleware.js"
import authenticateMiddleware from "../middleware/authenticateMiddleware.js"

const router = express.Router();

router.get("/:id", temporaryCarController.getCarById);

// delete temp
router.delete("/:id", temporaryCarController.deleteCarById);

router.post("/", temporaryCarController.postCar)

router.get("/",temporaryCarController.getAllCars)
export default router;
