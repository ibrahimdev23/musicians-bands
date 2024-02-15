
const {Sequelize, sequelize, DataTypes} = require('../db');
const { Band } = require('./Band');

// TODO - define the Musician model
let Musician = sequelize.define('Musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
});


Band.hasMany(Musician)
Musician.belongsTo(Band)

module.exports = {
  Musician,
};
