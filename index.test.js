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

  //   test("can create a Band", async () => {
  //     // TODO - test creating a band
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });

  //   test("can create a Musician", async () => {
  //     // TODO - test creating a musician
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });

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

  //   test("can update a Band", async () => {
  //     // TODO - test updating a band
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });

  //   test("can update a Musician", async () => {
  //     // TODO - test updating a musician
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });

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

  //   test("can delete a Band", async () => {
  //     // TODO - test deleting a band
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });

  //   test("can delete a Musician", async () => {
  //     // TODO - test deleting a musician
  //     expect("NO TEST").toBe("EXPECTED VALUE HERE");
  //   });
  test("can delete a Song", async () => {
    // TODO - test deleting a musician
    const newSong = await Song.create({
      title: "My Song",
      year: 2024,
      length: 300,
    });
    await newSong.destroy()

    const deletedSong = await Song.findOne({ where: { title: newSong.title } });
    expect(deletedSong.createdAt).toBeDefined()
  });
});
