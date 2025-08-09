const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.header);
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<form>')
        res.write('<input type="text" name="message" placeholder="Enter a message">');
        res.write('<label for="males"> ')
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="females"> ')
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>')
    }
 else if (req.url.toLocaleLowerCase() === "/submit-details"&&
  req.method == "POST"){
    fs.writeFileSync('message.txt', 'Faiq Khan');
    res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3009;
server.listen   (PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});