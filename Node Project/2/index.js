const fsPromises = require("fs").promises;
const path = require("path");

//fs.readFile("./files/starter.txt", (err, data) => {

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    console.log("File written");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n \n Its a wonderfull day!!!"
    );
    console.log("File appended");
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "newPromiseWrite.txt")
    );
    console.log("File renamed");
  } catch (err) {
    console.log(err);
  }
};
fileOps();

// fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you...!!!",
//   (err) => {
//     if (err) throw err;
//     console.log("Write is complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n \n Nice to meet you too ...!!!",
//       (err) => {
//         if (err) throw err;
//         console.log("Append is complete");
//       }
//     );

//     fs.rename(
//       path.join(__dirname, "files", "reply.txt"),
//       path.join(__dirname, "files", "newReply.txt"),
//       (err) => {
//         if (err) throw err;
//         console.log("Rename is complete");
//       }
//     );
//   }
// );

// append also creates a file if does not exists
// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Testing append ...!!!",
//   (err) => {
//     if (err) throw err;
//     console.log("Append is complete");
//   }
// );

// exit on uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Caught exception:", err);
  process.exit(1);
});
