const express = require("express");
const router = express.Router();
const airportController = require("../controller/Airport");
const { auth } = require("../middleware/Auth");

// Route to get all airports
router.get("/airports", airportController.getAllAirports);

// Route to get a specific airport by ID
router.get("/airports/:id", airportController.getAirportById);

// Route to create a new airport (requires authentication)
router.post(
  "/airports",
  auth,
  airportController.createAirport
);

// Route to update an existing airport (requires authentication)
router.put(
  "/airports/:id",
  auth,
  airportController.updateAirport
);

// Route to delete an airport by ID (requires authentication)
router.delete(
  "/airports/:id",
  auth,
  airportController.deleteAirport
);

module.exports = router;
