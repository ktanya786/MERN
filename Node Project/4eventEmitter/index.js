const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}
// initialize object
const myEmitter = new Emitter();
myEmitter.on("log", (msg) => logEvents(msg));

myEmitter.emit("log", "Log event emittedddddd");
console.log("Is emit called");
setTimeout(() => myEmitter.emit("log", "Log event emitted!1111"), 1000);
