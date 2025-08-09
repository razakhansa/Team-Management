const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
      res.write(`
     <html lang="en">
<head>
    <title>nav</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/men">men</a></li>
            <li><a href="/home">home</a></li>
            <li><a href="/women">women</a></li>
            <li><a href="/kids">kids</a></li>
            <li><a href="/cart">cart</a></li>
        </ul>
    </nav>
</body>
</html>
     `);
  if (req.url === "/home") {
    res.write("<h1>this is my home page</h1>");
    
  } else if (req.url === "/men") {
    res.write("<h1>this is my men pagwe</h1>");
    
  } else if (req.url === "/women") {
    res.write("<h1>this is my women page</h1>");
    
  } else if (req.url === "/kids") {
    res.write("<h1>this is my kids page</h1>");
    
  } else if (req.url === "/cart") {
    res.write("<h1>this is my cart page</h1>");
    
  } 

 return res.end();
});

server.listen(3002, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const PORT = 3002;
