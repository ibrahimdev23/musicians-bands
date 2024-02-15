const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
// Define associations here

//Many-to-Many Band/Song
Song.belongsToMany(Band, { through: "song_band" });
Band.belongsToMany(Song, { through: "song_band" });

module.exports = {
  Band,
  Musician,
  Song,
};
