const express = require("express");
const router = express.Router();
const flightController = require("../controller/Flight");
const { auth } = require("../middleware/Auth");

// Route to get all flights
router.get("/flights", flightController.getAllFlights);

// Route to get a specific flight by ID
router.get("/flights/:id", flightController.getFlightById);

// Route to create a new flight (requires authentication)
router.post("/flights", auth, flightController.createFlight);

// Route to update an existing flight by ID (requires authentication)
router.put(
  "/flights/:id",
  auth,
  flightController.updateFlight
);

// Route to delete a flight by ID (requires authentication)
router.delete(
  "/flights/:id",
  auth,
  flightController.deleteFlight
);

module.exports = router;
