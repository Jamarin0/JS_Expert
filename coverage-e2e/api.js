const http = require("http");

const handler = function (request, response) {
  return response.end("Helo World!");
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("app running at", 3000));

  module.exports = app