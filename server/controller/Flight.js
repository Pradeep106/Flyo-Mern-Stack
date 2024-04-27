const Flight = require("../model/Flight");

// Controller to get all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a single flight by ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new flight
const createFlight = async (req, res) => {
  const {
    airline,
    fromAirport,
    toAirport,
    departureDateTime,
    arrivalDateTime,
    takeoffDateTime,
    price,
  } = req.body;

  try {
    const flight = new Flight({
      airline,
      fromAirport,
      toAirport,
      departureDateTime,
      arrivalDateTime,
      takeoffDateTime,
      price,
    });

    const newFlight = await flight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing flight
const updateFlight = async (req, res) => {
  const {
    airline,
    fromAirport,
    toAirport,
    departureDateTime,
    arrivalDateTime,
    price,
  } = req.body;

  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    flight.airline = airline;
    flight.fromAirport = fromAirport;
    flight.toAirport = toAirport;
    flight.departureDateTime = departureDateTime;
    flight.arrivalDateTime = arrivalDateTime;
    flight.price = price;

    const updatedFlight = await flight.save();
    res.json(updatedFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a flight
const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }
    await flight.remove();
    res.json({ message: "Flight deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight,
};
