const sumRequestHandler = (req, res) => { 
    console.log("in sum handler", req.url);
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const bodyStr = Buffer.concat(body).toString(); 
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
       <head><title>Sum Result</title></head>
        <body>
        <h1>Sum Result: ${result}</h1>
        <a href="/calculator">Go Back to Calculator</a>
        </body>
        </html>
        `);
        return res.end();
    })
};

exports.sumRequestHandler = sumRequestHandler;