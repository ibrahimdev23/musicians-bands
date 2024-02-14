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
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({ name: "George", genre: "rock" });
    const updatedBand = await testBand.update({ name: "Sally" });
    expect(updatedBand.name).toBe("Sally");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
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
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });
});
