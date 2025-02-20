const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
//const logEvents = require("./middleware/logEvents");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

//custom middleware logger
// app.use((req, res, next) => {
//   logEvents(
//     `${req.method}\t ${req.header.origin}\t ${req.url}`,
//     "reqEventsLog.txt"
//   );
//   console.log(req.method, req.path);
//   next();
// });
app.use(logger);

//cross origin resourse sharing
const whitelist = ["http://localhost:3500"];
const corsOptions = {
  origin: (origin, callback) => {
    console.log(`origin is ${origin}`);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  OptionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//built-in middleware for urlencoded data or form data
app.use(express.urlencoded({ extended: false }));

//built in middle ware for json encoding
app.use(express.json());

//serve static file
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));

app.use("/subdir", require("./routes/subdir"));

app.use("/employees", require("./routes/api/employees"));

//moved to root.js
// app.get("^/$|index(.html)?", (req, res) => {
//   //res.send("Hello world!!!");
//   //res.sendFile("views/index.html", { root: __dirname });
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// app.get("/new-page(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "new-page.html"));
// });

//Route handlers
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("Route handler");
    next();
  },
  (req, res) => {
    res.send("Hello world!!!");
  }
);

const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Hello world!!!");
};

app.get("/chain(.html)?", [one, two, three]);

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "/404.html")); // expresss send 302 status code by default
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
