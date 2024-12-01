const Vehicle = require('../models/vehicleModel');

// Fonction pour créer un véhicule avec des validations spécifiques
const createVehicle = async (req, res) => {
  try {
    const { model, brand, year, color, fuelType, chassisNumber, price } = req.body;

    // Validation supplémentaire (par exemple : ne pas accepter de véhicules de plus de 10 ans)
    const currentYear = new Date().getFullYear();
    if (year < currentYear - 10) {
      return res.status(400).json({ message: 'Vehicles older than 10 years are not allowed' });
    }

    // Vérification de l'unicité du numéro de châssis
    const existingVehicle = await Vehicle.findOne({ chassisNumber });
    if (existingVehicle) {
      return res.status(400).json({ message: 'A vehicle with this chassis number already exists' });
    }

    // Créer le véhicule
    const vehicle = new Vehicle({
      model,
      brand,
      year,
      color,
      fuelType,
      chassisNumber,
      price,
      condition: 'New', // Forcer un statut par défaut, par exemple
      mileage: 0, // Initialiser à 0 km
    });

    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create vehicle', error: error.message });
  }
};

module.exports = { createVehicle };
