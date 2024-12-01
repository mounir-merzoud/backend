const Vehicle = require('../models/vehicleModel');

// Fonction pour supprimer un véhicule par son ID
const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifie si le véhicule existe avant de le supprimer
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    // Supprime le véhicule
    await Vehicle.findByIdAndDelete(id);
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting vehicle', error: error.message });
  }
};

module.exports = { deleteVehicle };
