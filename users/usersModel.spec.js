const db = require("../database/dbConfig");
const User = require("./usersModel");

beforeEach(async () => {
  await db("users").truncate();
});

const testUserData = {
  fullname: "Johnson Ogwuru",
  age: 33,
  class: "js3"
};

describe("model talks to the database", () => {
  it("returns users when inserted", async () => {
    let users = await User.getAll();
    expect(users).toHaveLength(0);

    await User.insert(testUserData);
    await User.insert(testUserData);
    await User.insert(testUserData);

    users = await User.getAll();
    expect(users).toHaveLength(3);
  });
});
