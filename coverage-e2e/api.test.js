const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");

describe("API Suite test", () => {
  describe("/contact", () => {
    it("should request the contact page and return HTTP Status 200", async () => {
      const response = await request(app).get("/contact").expect(200);
      assert.deepStrictEqual(response.text, "contact us page");
    });
  });
  describe("/helo", () => {
    it("should request an inexistent route /hi and redirect to /helo", async () => {
        const response = await request(app).get("/hi").expect(200);
        assert.deepStrictEqual(response.text, "Hello world!");
    });
  });
});
