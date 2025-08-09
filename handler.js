const { welcomeToTeamManagement } = require("./actions/welcomeToTeamManagment");

const requestHandler = (req, res) => {
  console.log(req.url, res.method);
  if (req.url === "/") {
    welcomeToTeamManagement(req, res);
  } else if (req.url === "/create-member") {
    res.setHeader("Content-Type", "text/html");
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
  } else if (req.url === "/members") {
    res.write(`
    <html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<h2>TekBex Employes names and information</h2>

<table style="width:100%">
   <tr>
  <th>Name</th>
    <th>Phone</th>
  <th>CNIC</th>
  <th>Designation</th>
  <th>Date of Joining</th>
  <th>Gender</th>
  <th>Location</th>
  <th>ID</th>
   </tr>
   <tr>
  <td>Faiq Khan</td>
  <td>+92 329 1467715</td>
  <td>N/A</td>
  <td>N/A</td>
  <td>1st July 2025</td>
  <td>Male</td>
  <td>Lahore Township</td>
  <td>N/A</td>
   </tr>
   <tr>
  <td>Raza Khan</td>
  <td>+92 346 6870953</td>
  <td>N/A</td>
  <td>N/A</td>
  <td>1st July 2025</td>
  <td>Male</td>
  <td>Lahore Township</td>
   <td>N/A</td>
    
   </tr>
  <tr>
  <td>Hamayun Khan</td>
  <td>+92 303 0438526</td>
  <td>N/A</td>
  <td>N/A</td>
  <td>1st July 2025</td>
  <td>Male</td>
  <td>Lahore Township</td>
   <td>N/A</td>

   </tr>
  
    <tr>
  <td>Taha Khan</td>
  <td>+92 332 4517126</td>
   <td>N/A</td>
   <td>N/A</td>
   <td>1st July 2025</td>
   <td>Male</td>
   <td>Lahore Township</td>
    <td>N/A</td>
   
  </tr>
  
    <tr>
  <td>Ahmed Ullah Baig</td>
  <td>+92 325 7425803</td>
  <td>N/A</td>
  <td>N/A</td>
  <td>1st July 2025</td>
  <td>Rather Not to say</td>
  <td>Lahore Township</td>
   <td>N/A</td>
  
  </tr>
  
  
  
  
</table>
</body>
</html>
        `);
    return res.end();
  }
};

exports.requestHandler = requestHandler;
