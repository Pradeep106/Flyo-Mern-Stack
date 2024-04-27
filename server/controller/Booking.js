const Booking = require("../model/Booking");
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.find();
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error retrieving booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createBooking = async (req, res) => {
  try {
    // Extract booking data from request body
    const bookingData = req.body;

    // Create a new booking instance
    const newBooking = new Booking(bookingData);

    // Save the new booking to the database
    await newBooking.save();

    // Respond with the newly created booking
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
