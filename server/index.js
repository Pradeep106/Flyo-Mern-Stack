const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dbConfig = require("./config/database");

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("api is running"));

// Import and use the routes
const airlineRoutes = require("./routes/airlineRoute");
const airportRoutes = require("./routes/airportRoute");
const bookingRoutes = require("./routes/bookingRoute");
const flightRoutes = require("./routes/flightRoute");
// const passengerRoutes = require("./routes/passangerRoute");
const authRoutes = require("./routes/authRoute");

app.use("/api", airlineRoutes);
app.use("/api", airportRoutes);
app.use("/api", bookingRoutes);
app.use("/api", flightRoutes);
// app.use("/api", passengerRoutes);
app.use("/api", authRoutes);

// Call the database connection function and use a Promise to start the server afterward
dbConfig()
  .then(() => {
    const PORT = process.env.PORT || 8002;

    app.listen(PORT, () => {
      console.log("Server is started on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
