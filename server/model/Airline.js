const mongoose = require("mongoose");

const airlineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Airline = mongoose.model("Airline", airlineSchema);

module.exports = Airline;
