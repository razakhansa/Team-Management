const http = require('http');
const express = require('express')
// const testingsyntax = require('./syntax')
const  requestHandler  = require('./requesthandler.js');
const app = express();
// const { lookupService } = require('dns');  
const server = http.createServer(app);
// const server = http.createServer((req, res) => {
// console.log(req.url, req.method);
// testingsyntax();
// });
const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
}); 