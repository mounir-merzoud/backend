const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    model: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true, min: 1886 },
    color: { type: String, default: "Unknown" },
    fuelType: {
      type: String,
      enum: ["Diesel", "Electric", "Hybrid", "CNG", "LPG"],
      required: true,
    },
    mileage: { type: Number, default: 0 },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic", "Semi-Automatic"],
    },
    doors: { type: Number, min: 2, max: 5 },
    seats: { type: Number, min: 1, max: 9 },
    chassisNumber: { type: String, unique: true, required: true },
    price: { type: Number, required: true, min: 0 },
    registrationDate: { type: Date, default: Date.now },
    condition: { type: String, enum: ["New", "Used"], required: true },
    description: { type: String, maxlength: 500 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VehicleModel", vehicleSchema);
