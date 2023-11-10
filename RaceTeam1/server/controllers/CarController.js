const { Car } = require("../models/models");
const ApiError = require("../error/ApiError");

class CarController {
  async create(req, res) {
    const { mark } = req.body;
    const car = await Car.create({ mark });
    return res.json(car);
  }

  async getAll(req, res) {
    const car = await Car.findAll();
    return res.json(car);
  }
}

module.exports = new CarController();
