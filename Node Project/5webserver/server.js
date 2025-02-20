const http = require("http");
const path = require("path");
const fs = require("fs");
const fspromises = require("fs").promises;

const logEvents = require("./logEvents");

const EventEmitter = require("events");
class Emitter extends EventEmitter {}
// initialize object
const emitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
