const { createVehicle } = require("./createVehicle");
const { deleteVehicle } = require("./deleteVehicle");

const vehicleController = {
  createVehicle,
  deleteVehicle,
};

module.exports = vehicleController;
