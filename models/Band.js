const { Sequelize, sequelize, DataTypes } = require("../db");

// TODO - define the Band model
let Band;
Band = sequelize.define("Band", {
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
});

Band = module.exports = {
  Band,
};
