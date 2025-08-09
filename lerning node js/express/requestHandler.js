const fs = require("fs");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form Page</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="post">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form></body></html>");
    return res.end();
  } 
  if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params.entries());
      console.log("Parsed Data:", bodyObject);
      fs.writeFileSync("user.txt", `Name: ${bodyObject.username}, Gender: ${bodyObject.gender}`);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
    return;
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome! I can help you.</h1></body></html>");
    return res.end();
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Not Found</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body></html>");
  res.end();
};
module.exports = requestHandler;