const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({ name: "George", genre: "rock" });
    expect(testBand.name).toBe("George");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const musician1 = await Musician.create({
      name: "john",
      instrument: "piano",
    });
    expect(musician1.name).toBe("john");
  });

  test("can create a Song", async () => {
    // TODO - test creating a song
    const newSong = await Song.create({
      title: "My Song",
      year: 2024,
      length: 300,
    });
    expect(newSong.title).toBe("My Song");
    expect(newSong.year).toBe(2024);
    expect(newSong.length).toBe(300);
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({ name: "George", genre: "rock" });
    const updatedBand = await testBand.update({ name: "Sally" });
    expect(updatedBand.name).toBe("Sally");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const musician2 = await Musician.create({
      name: "cena",
      instrument: "piano",
    });
    musician2.name = "John";
    await musician2.save();
    expect(musician2.name).toBe("John");
  });

  test("can update a Song", async () => {
    // TODO - test updating a song
    const newSong = await Song.create({
      title: "My Song",
      year: 2024,
      length: 300,
    });

    const updatedSong = await newSong.update({
      title: "Updated Song Title",
      year: 2025,
      length: 350,
    });
    expect(updatedSong.title).toBe("Updated Song Title");
    expect(updatedSong.year).toBe(2025);
    expect(updatedSong.length).toBe(350);
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const testBand = await Band.create({ name: "George", genre: "rock" });
    await testBand.destroy();

    const deletedBand = await Band.findOne({ where: { id: testBand.id } });
    expect(deletedBand).toBeNull();
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const musician2 = await Musician.create({
      name: "cena",
      instrument: "piano",
    });
    musician2.name = "John";
    await musician2.save();
    expect(musician2.name).toBe("John");
  });

  test("can delete a Song", async () => {
    // TODO - test deleting a musician
    const newSong = await Song.create({
      title: "My Song",
      year: 2024,
      length: 300,
    });
    await newSong.destroy();

    const deletedSong = await Song.findOne({ where: { title: newSong.title } });
    expect(deletedSong.createdAt).toBeDefined();
  });
});

describe("Many-to-Many associations", function () {
  test("Song-Band, Band can have many Songs", async () => {
    const band = await Band.create({ name: "George", genre: "rock" });

    const songs = await Song.bulkCreate([
      {
        title: "My Song",
        year: 2024,
        length: 300,
      },
      {
        title: "My Song 2",
        year: 2024,
        length: 300,
      },
    ]);

    await band.addSong(songs);
    const associatedSongs = await band.getSongs();

    expect(associatedSongs).toBeTruthy();
  });
});

test("Song-Band, Song can have many bands", async () => {
  const bands = await Band.bulkCreate([
    { name: "George", genre: "rock" },
    { name: "Sally", genre: "Pop" },
  ]);

  const song = await Song.create({
    title: "My Song",
    year: 2024,
    length: 300,
  });

  await song.addBand(bands);
  const associatedBands = await song.getBands();

  expect(associatedBands).toBeTruthy();
});
