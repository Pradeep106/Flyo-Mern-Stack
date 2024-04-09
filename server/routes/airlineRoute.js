const express = require("express");
const router = express.Router();
const airlineController = require("../controller/Airline");
const { auth } = require("../middleware/Auth");

// Route to get all airlines
router.get("/airlines", airlineController.getAllAirlines);

// Route to get a specific airline by ID
router.get("/airlines/:id", airlineController.getAirlineById);

// Route to create a new airline (requires authentication)
router.post("/airlines", auth, airlineController.createAirline);

// Route to update an existing airline (requires authentication)
router.put("/airlines/:id", auth, airlineController.updateAirline);

// Route to delete an airline by ID (requires authentication)
router.delete("/airlines/:id", auth, airlineController.deleteAirline);

module.exports = router;
