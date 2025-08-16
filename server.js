const http = require("http");
const { requestHandler } = require("./handler");
require("./db");

const server = http.createServer(requestHandler);

const PORT = 3006;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
