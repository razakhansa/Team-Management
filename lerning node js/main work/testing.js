const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // corrected 'req.header' to 'req.headers'

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my home page!</h1></body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Products</title></head>');
        res.write('<body><h1>Welcome to my product page!</h1></body>');
        res.write('</html>');
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Not Found</title></head>');
        res.write('<body><h1>Page Not Found</h1></body>');
        res.write('</html>');
        res.end();
    }
});

const PORT = 3007;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});