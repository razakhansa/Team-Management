const { sumRequestHandler } = require('./sum');
const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
 res.write(`<html>
       <head><title>My First Page</title></head>
        <body><h1>Welcome to HTML</h1>
        <a href="/calculator">Go To Calculator</a>
        </body>
        </html>
        `);
     return res.end();
} else if (req.url.toLowerCase() === "/calculator"){
     res.setHeader('Content-Type', 'text/html');
     res.write(`<html>
       <head><title>My First Page</title></head>
        <body><h1>here is the calculator</h1>
        <form action="/calculate-result" method="POST">
        <input type="text" placeholder=" first num" name="first"/>
        <input type="text" placeholder="second num" name="second"/>
        <input type="submit" value="sum">
        </form>
        </body>
        </html>
        `);
        return res.end();
} else if  (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST')
 {
    return sumRequestHandler(req, res);
    }
 
 res.setHeader('Content-Type', 'text/html');
 res.write(`<html>
       <head><title>My First Page</title></head>
        <body><h1>404 Page does not exist</h1>
        <a href="/">Go To Home</a>
        </body>
        </html>
        `);
        res.end();
 };

exports.requestHandler = requestHandler;