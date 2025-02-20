const fs = require("fs");

const rs = fs.createReadStream("./files/starter.txt");

const ws = fs.WriteStream("./files/new-starter.txt");

rs.pipe(ws);
