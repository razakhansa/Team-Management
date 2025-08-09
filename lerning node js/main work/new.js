const http = require("http");
const {requestHandler} = require('./new.js');
const server = http.createServer(requestHandler);

const PORT = 3009;
server.listen   (PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});