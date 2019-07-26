const app = require("./index");

const request = require("supertest");

describe("server is online", () => {
  it("GET returns status 200", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .expect("Content-Type", /json/);
  });

  it("returns a res message", () => {
    return request(app)
      .get("/api")
      .then(res => {
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toEqual({ message: "Welcome to Testing!" });
      });
  });
});
