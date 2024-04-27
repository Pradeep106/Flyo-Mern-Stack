const express = require('express');
const router = express.Router();
const { getBookingById, createBooking } = require('../controller/Booking');

// Define routes
router.get('/:id', getBookingById);
router.post('/bookings', createBooking);

module.exports = router;
