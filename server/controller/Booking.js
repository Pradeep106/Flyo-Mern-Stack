const Booking = require("../model/Booking");

// Controller to get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new booking
const createBooking = async (req, res) => {
  const { flight, passengers, booking_datetime, status, booking_type } =
    req.body;

  try {
    const booking = new Booking({
      flight,
      passengers,
      booking_datetime,
      status,
      booking_type,
    });

    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing booking
const updateBooking = async (req, res) => {
  const { flight, passengers, booking_datetime, status, booking_type } =
    req.body;

  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.flight = flight;
    booking.passengers = passengers;
    booking.booking_datetime = booking_datetime;
    booking.status = status;
    booking.booking_type = booking_type;

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    await booking.remove();
    res.json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
