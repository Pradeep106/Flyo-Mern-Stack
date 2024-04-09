const express = require("express");
const router = express.Router();
const bookingController = require("../controller/Booking");
const { auth } = require("../middleware/Auth");

// Route to create a new booking (requires authentication)
router.post(
  "/bookings",
  auth,
  bookingController.createBooking
);

// Route to get all bookings for a user (requires authentication)
router.get(
  "/bookings",
  auth,
  bookingController.getAllBookings
);

// Route to get a specific booking by ID (requires authentication)
router.get(
  "/bookings/:id",
  auth,
  bookingController.getBookingById
);

// Route to update an existing booking by ID (requires authentication)
router.put(
  "/bookings/:id",
  auth,
  bookingController.updateBooking
);

// Route to cancel a booking by ID (requires authentication)
router.delete(
  "/bookings/:id",
  auth,
  bookingController.deleteBooking
);

module.exports = router;
