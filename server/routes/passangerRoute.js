const express = require("express");
const router = express.Router();
const passengerController = require("../controller/");
const { auth } = require("../middleware/Auth");

// Route to create a new passenger (requires authentication)
router.post(
  "/passengers",
  authenticateAccessToken,
  passengerController.createPassenger
);

// Route to get all passengers (requires authentication)
router.get(
  "/passengers",
  authenticateAccessToken,
  passengerController.getAllPassengers
);

// Route to get a specific passenger by ID (requires authentication)
router.get(
  "/passengers/:id",
  authenticateAccessToken,
  passengerController.getPassengerById
);

// Route to update an existing passenger by ID (requires authentication)
router.put(
  "/passengers/:id",
  authenticateAccessToken,
  passengerController.updatePassenger
);

// Route to delete a passenger by ID (requires authentication)
router.delete(
  "/passengers/:id",
  authenticateAccessToken,
  passengerController.deletePassenger
);

module.exports = router;
