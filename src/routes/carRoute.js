import express from "express";
import * as carController from "../controllers/carController.js";
import Car from "../models/Car.js";
import express from "express";
import * as carController from "../controllers/carController.js";

const router = express.Router();

// API - 1 Post
router.post("/", carController.createCar);

// API - RANDOM
router.get("/car-random", carController.randomAllCars);

// API - Sort lastest
router.get("/Car-New", carController.carLastest);

// API - SearchCar
router.get("/searchbar", carController.searchCar);

export default router;

