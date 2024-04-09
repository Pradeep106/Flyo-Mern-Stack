const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Airline',
    required: true
  },
  fromAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Airport',
    required: true
  },
  toAirport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Airport',
    required: true
  },
  departureDateTime: {
    type: Date,
    required: true
  },
  arrivalDateTime: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
