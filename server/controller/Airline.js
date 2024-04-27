const Airline = require("../model/Airline");

// Controller to get all airlines
const getAllAirlines = async (req, res) => {
  try {
    const airlines = await Airline.find();
    res.json(airlines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get a single airline by ID
const getAirlineById = async (req, res) => {
  try {
    const airline = await Airline.findById(req.params.id);
    if (!airline) {
      return res.status(404).json({ message: "Airline not found" });
    }
    res.json(airline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new airline
const createAirline = async (req, res) => {
  const { name, model, code, country } = req.body;

  // Check if any required field is empty
  if (!name || !code || !country || !model) {
    return res
      .status(400)
      .json({ message: "Name, code, and country are required fields" });
  }

  const airline = new Airline({
    name,
    model,
    code,
    country,
  });

  try {
    const newAirline = await airline.save();
    res.status(201).json(newAirline);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to update an existing airline
const updateAirline = async (req, res) => {
  const { name, code, country } = req.body;

  // Check if any required field is empty
  if (!name || !code || !country) {
    return res
      .status(400)
      .json({ message: "Name, code, and country are required fields" });
  }

  try {
    const airline = await Airline.findById(req.params.id);
    if (!airline) {
      return res.status(404).json({ message: "Airline not found" });
    }

    airline.name = name;
    airline.code = code;
    airline.country = country;

    const updatedAirline = await airline.save();
    res.json(updatedAirline);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete an airline
const deleteAirline = async (req, res) => {
  try {
    const airline = await Airline.findById(req.params.id);
    if (!airline) {
      return res.status(404).json({ message: "Airline not found" });
    }
    await airline.remove();
    res.json({ message: "Airline deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAirlines,
  getAirlineById,
  createAirline,
  updateAirline,
  deleteAirline,
};
