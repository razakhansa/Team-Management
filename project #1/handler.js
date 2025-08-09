const { wRequestHandler } = require('./app');

const requestHandler = (req, res) => {
  console.log(req.url, res.method);
  if (req.url === '/team') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head></head>
        <body><h1>HEY TESTING</h1></body> 
        </html>
        `)
        return res.end();
  }
}

exports.requestHandler = requestHandler;