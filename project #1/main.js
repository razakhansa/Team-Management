const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head></head>
    <body>
    <h1><a href="/home">Go To Page</a></h1>

    </body>    
    </html>
`);
  } else if (req.url === '/home') {
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
    {
    //  res.setHeader('Content-Type', 'text/html');

  }
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});