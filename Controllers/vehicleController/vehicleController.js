const Vehicle = require('../models/vehicleModel');

// Fonction pour ajouter un véhicule
const addVehicle = async (req, res) => {
  try {
    const {
      model, brand, year, color, fuelType, mileage, transmission,
      doors, seats, chassisNumber, price, condition, description
    } = req.body;

    // Crée un nouveau véhicule
    const vehicle = new Vehicle({
      model,
      brand,
      year,
      color,
      fuelType,
      mileage,
      transmission,
      doors,
      seats,
      chassisNumber,
      price,
      condition,
      description,
    });

    // Sauvegarde dans la base de données
    const savedVehicle = await vehicle.save();

    // Réponse au client
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add vehicle', error: error.message });
  }
};

module.exports = { addVehicle };
