const http = require("http");

const PORT = 3035;
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
