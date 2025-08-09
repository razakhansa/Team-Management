const http = require('http');

const requestHandler = ((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="message" placeholder="Enter a message"><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label><br>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
    
    console.log(finalMessage);                       });

req.on('end', () => {
    const buffer = Buffer.concat(body);              // 👈 buffer create karo
    console.log(buffer);                             // 👈 raw buffer print
    console.log(buffer.toString());                  // 👈 decoded string print

    const parsedBody = buffer.toString();            // decoded string
    const params = new URLSearchParams(parsedBody);  // parse
    const message = params.get('message');
    const gender = params.get('gender');

    const finalMessage = `Message: ${message}, Gender: ${gender}`;
    fs.writeFileSync('message.txt', finalMessage);
    // 👈 final output

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
});

        return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    return res.end();
});

// const PORT = 3010;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = requestHandler;