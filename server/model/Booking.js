const mongoose = require("mongoose");

// Define the schema
const bookingSchema = new mongoose.Schema({
  id: Number,
  airlineName: String,
  airlineModel: String,
  airlineCode: String,
  fromAirport: {
    code: String,
    name: String,
    city: String,
  },
  toAirport: {
    code: String,
    name: String,
    city: String,
  },
  departureTime: Date,
  arrivalTime: Date,
  flightTakeoffDate: Date,
  prices: {
    adult: Number,
    children: Number,
    infant: Number,
  },
  stops: Number,
  duration: String,
  userData: {
    passengers: [
      {
        category: String,
        count: Number,
      },
    ],
    booking_date: Date,
    roundtrip_date: Date,
    booking_type: String,
    fromAirport: String,
    toAirport: String,
    booking_class: String,
  },
  totalPrice: Number,
});

// Create a model
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
