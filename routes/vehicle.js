const express = require("express");
const vehicleController = require("../controllers/vehicle");
const router = express.Router();
// Route POST pour créer un véhicule avec des validations spécifiques
router.post("/create", vehicleController.createVehicle);

// Route DELETE pour supprimer un véhicule
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
