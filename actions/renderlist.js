 const { getAllUsers, getUserByid } = require("../db");
const renderList = async (req, res) => {
//  const users = await getAllUsers((err, users) => {
//     return users
//    }) 
  console.log("Rendering list of members");

   res.setHeader("Content-Type", "text/html");

  getAllUsers((err, users) => {
    if (err) { console.log("errro",err) }
    
    else {
      console.log("Users fetched successfully:", users); 
      
  res.write(`
<html>
	<style>
		table, th, td {
		  border:1px solid black;
		}
		.optp  a{
		  text-decoration: none;

		  }
	</style>
	<head></head>
	<body>
		<h2>TekBex Employes names and information</h2>
		<table style="width:100%">
    	<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>CNIC</th> 
			</tr>
			${users.map(user=>
      "<tr>"
        +"<td>"+user.id+"</td>"
        +"<td>"+user.name+"</td>"
				+"<td>"+user.email+"</td>"
				+"<td>"+user.cnic+"</td>" 
			+"</tr>")}

			<button class="optp"><a href="/members/create">Form</a></button>
		</table>
	</body>
</html>

        `);
  return res.end();

    }});  

};

exports.renderList = renderList;