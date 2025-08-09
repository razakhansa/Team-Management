const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Form page</title></head>
          <body>
            <h2>ENTER YOUR PERSNOL DIETAIL</h2>
                 <form action="/submit-details" method="post">
                 <label for="first">First Name</label><br>
               <input type="text" name="username" placeholder="Enter your name"><br><br>
                <label for="cnic">CNIC Number</label><br>
               <input type="text" name="username" placeholder="Enter your cnic"><br><br>
               <label for="Designation">Your Designation</label><br>
               <input type="text" name="username" placeholder="Enter your Designation"><br><br>
               <label for=" Joinig">Date of Joinig</label><br>
               <input type="text" name="username" placeholder="Enter your Joinig"><br><br>
                <label for=" address">Enter your adress</label><br>
               <input type="text" name="username" placeholder="Enter your address"><br><br>
               <label for="phone">Enter your phone number</label><br>
               <input type="text" name="username" placeholder="Enter your phone number"><br><br>
               <label for="Gender">Gender</label><br>
              <input type="text" name="username" placeholder="Enter your Gender"><br>
              <label for="male">Male</label>
              <input type="radio" id="male" name="gender" value="male">
              <label for="female">Female</label>
              <input type="radio" id="female" name="gender" value="female"><br><br>
              <input type="submit" value="Submit "/>
              </form> 
            </body>
          </html>`);
        return res.end(); 
      } if(req.url.toLowerCase() === "/submit-details"){
 }    
      res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>web page</title>
        </head>
        <body>
          <h1>WELL COME</h1>
          <p>wisit our website and call employes to more informtion
           </p>
        
        </body>
      </html>
    `); 
});
const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});