const express = require('express');
const { addVehicle, createVehicle, deleteVehicle } = require('../Controllers/vehicleController/vehicleController');
const router = express.Router();

// Route POST pour ajouter un véhicule
router.post('/', addVehicle);

// Route POST pour créer un véhicule avec des validations spécifiques
router.post('/create', createVehicle);

// Route DELETE pour supprimer un véhicule
router.delete('/:id', deleteVehicle);



module.exports = router;
