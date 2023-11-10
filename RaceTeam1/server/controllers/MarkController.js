const { Mark } = require("../models/models");
const ApiError = require("../error/ApiError");

class MarkController {
  async create(req, res) {
    const { marks } = req.body;
    const mark = await Mark.create({ mark });
    return res.json(marks);
  }

  async getAll(req, res) {
    const marks = await Mark.findAll();
    return res.json(marks);
  }
}

module.exports = new MarkController();
