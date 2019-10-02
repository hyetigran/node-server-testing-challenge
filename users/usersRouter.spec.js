const request = require("supertest");
const app = require("../api/app");

describe("routes are navigating", () => {
  it("GET / returns 200", () => {
    return request(app)
      .get("/api/users")
      .expect(200);
  });

  it("GET /:id returns 200", () => {
    return request(app)
      .get("/api/students/1")
      .expect(200);
  });
});
