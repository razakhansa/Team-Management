 const { getAllUsers, getUserByid, deleteUser } = require("../db");
const renderList = async (req, res) => {
//  const users = await getAllUsers((err, users) => {
//     return users
//    }) 
  console.log("Rendering list of members");
const alertMessage = "Are you sure you want to delete this member?";	
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
		<table style="width:100%" >
    	<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>CNIC</th> 
				<th>Designation</th>
				<th>Joining</th>
				<th>Address</th>
				<th>Phone Number</th>
			</tr>
			${users.map(user=>
      "<tr>"
        +"<td>"+user.id+"</td>"
        +"<td>"+user.name+"</td>"
		+"<td>"+user.email+"</td>"
		+"<td>"+user.cnic+"</td>" 
		+"<td>"+user.designation+"</td>"
		+"<td>"+user.joining+"</td>"
		+"<td>"+user.address+"</td>"
		+"<td>"+user.phonenumber+"</td>"
		+"<td><button><a href='/members/create?id="+user.id+"'>Edit</a></button></td>"
		+`<button onclick="deleteFunc(${user.id})">delete</button></td>`
			+"</tr>")}

		</table>
		<button><a href="/members/create">Add New Member</a></button>
		<button><a href="/">Back to Home</a></button>
	</body>
	

<script>
function deleteFunc(id) {
  let text; 
  if (confirm("Press a button!") == true) {
  window.location.href = "/members/delete?id="+id;
  }  
	
}
</script>
</html>

        `);
  return res.end();

    }});  

};

exports.renderList = renderList;