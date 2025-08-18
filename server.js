const http = require("http");
const { requestHandler } = require("./handler");
require("./db");

const server = http.createServer(requestHandler);

<<<<<<< Updated upstream
const PORT = 3002;
=======
const PORT = 3003;
>>>>>>> Stashed changes
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
