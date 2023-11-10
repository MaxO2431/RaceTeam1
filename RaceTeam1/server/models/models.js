const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const RaceTeam = sequelize.define("RaceTeam", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Race = sequelize.define("Race", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const RaceInformation = sequelize.define("RaceInformation", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Result = sequelize.define("Result", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  place: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Car = sequelize.define("Car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  mark: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Model = sequelize.define("Model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  group: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const ResultInfo = sequelize.define("Result_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const CarModel = sequelize.define("Car_Model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

RaceTeam.hasOne(Race);
Race.belongsTo(RaceTeam);

RaceTeam.hasMany(Rating);
Rating.belongsTo(RaceTeam);

Race.hasMany(RaceInformation);
RaceInformation.belongsTo(Race);

Car.hasMany(Result);
Result.belongsTo(Car);

Model.hasMany(Result);
Result.belongsTo(Model);

Result.hasMany(Rating);
Rating.belongsTo(Result);

Result.hasMany(RaceInformation);
RaceInformation.belongsTo(Result);

Result.hasMany(ResultInfo, { as: "info" });
ResultInfo.belongsTo(Result);

Car.belongsToMany(Model, { through: CarModel });
Model.belongsToMany(Car, { through: CarModel });

module.exports = {
  RaceTeam,
  Race,
  RaceInformation,
  Result,
  Car,
  Model,
  Rating,
  CarModel,
  ResultInfo,
};
