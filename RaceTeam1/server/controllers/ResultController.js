const uuid = require("uuid");
const path = require("path");
const { Result, ResultInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class ResultController {
  async create(req, res, next) {
    try {
      let { name, price, modelId, carId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Result.create({
        name,
        price,
        modelId,
        carId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { modelId, carId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let devices;
    if (!modelId && !carId) {
      devices = await Result.findAndCountAll({ limit, offset });
    }
    if (modelId && !carId) {
      devices = await Result.findAndCountAll({
        where: { modelId },
        limit,
        offset,
      });
    }
    if (!modelId && carId) {
      devices = await Result.findAndCountAll({
        where: { carId },
        limit,
        offset,
      });
    }
    if (modeId && carId) {
      devices = await Result.findAndCountAll({
        where: { carId, modelId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Result.findOne({
      where: { id },
      include: [{ model: ResultInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new ResultController();
