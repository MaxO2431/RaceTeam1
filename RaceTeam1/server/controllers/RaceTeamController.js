const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { RaceTeam, Race } = require("../models/models");
const { reaction } = require("mobx");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class RaceTeamController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await RaceTeam.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const raceteam = await RaceTeam.create({
      email,
      role,
      password: hashPassword,
    });
    const race = await Race.create({ raceteamid: raceteam.id });
    const token = generateJwt(raceteam.id, raceteam.email, raceteam.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const raceteam = await RaceTeam.findOne({ where: { email } });
    if (!raceteam) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, raceteam.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(raceteam.id, raceteam.email, raceteam.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(
      req.raceteam.id,
      req.raceteam.email,
      req.raceteam.role
    );
    return res.json({ token });
  }
}

module.exports = new RaceTeamController();
