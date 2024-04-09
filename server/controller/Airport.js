const Airport = require("../model/Airport");

// Controller to get all airports
const getAllAirports = async (req, res) => {
  try {
    const airports = await Airport.find();
    res.json(airports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a single airport by ID
const getAirportById = async (req, res) => {
  try {
    const airport = await Airport.findById(req.params.id);
    if (!airport) {
      return res.status(404).json({ message: "Airport not found" });
    }
    res.json(airport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new airport
const createAirport = async (req, res) => {
  const { name, code, city, country } = req.body;

  try {
    const airport = new Airport({
      name,
      code,
      city,
      country,
    });

    const newAirport = await airport.save();
    res.status(201).json(newAirport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing airport
const updateAirport = async (req, res) => {
  const { name, code, city, country } = req.body;

  try {
    const airport = await Airport.findById(req.params.id);
    if (!airport) {
      return res.status(404).json({ message: "Airport not found" });
    }

    airport.name = name;
    airport.code = code;
    airport.city = city;
    airport.country = country;

    const updatedAirport = await airport.save();
    res.json(updatedAirport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete an airport
const deleteAirport = async (req, res) => {
  try {
    const airport = await Airport.findById(req.params.id);
    if (!airport) {
      return res.status(404).json({ message: "Airport not found" });
    }
    await airport.remove();
    res.json({ message: "Airport deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAirports,
  getAirportById,
  createAirport,
  updateAirport,
  deleteAirport,
};
