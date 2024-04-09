const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true
  },
  passengers: [{
    type: {
      type: String,
      enum: ['Kid', 'Adult', 'Infant'],
      required: true
    },
    passenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Passenger',
      required: true
    }
  }],
  booking_datetime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Pending'
  },
  booking_type: {
    type: String,
    enum: ['One-way', 'Round-trip'],
    default: 'One-way'
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
