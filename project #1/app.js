const http = require('http');
const { wRequestHandler } = require('./handler');

const server = http.createServer(wRequestHandler);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});