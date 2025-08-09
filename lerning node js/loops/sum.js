const sumRequestHandler = (req, res) => { 
    console.log("1. in sum handler", req.url);
    const body = [];
     let result
    req.on('data', chunk => {

     body.push(chunk)
     console.log('2. chunk came');
    });
    req.on('end', () => {
      console.log('3. end of data');
      const bodyStr = Buffer.concat(body).toString(); 
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    });
    console.log('4. sending response');
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
       <head><title>Sum Result </title></head>
        <body>
        <h1>Sum Result ${result}</h1>
        <a href="/calculator">Go Back to Calculator</a>
        </body>
        </html>
        `);
        return res.end();
};

exports.sumRequestHandler = sumRequestHandler;