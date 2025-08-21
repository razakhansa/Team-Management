
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307,
  database: "management", 
});


connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log(" Connected to the database successfully!");
});

 
const createMemeber = (payload, callback) => {
  if (!payload) {
    return callback("Invalid user data", null);
  }
  const query = "INSERT INTO users SET ?";
  const data = {
    name: payload.name,
    email: payload.email,
    cnic: payload.cnic,
    designation: payload.designation,
    // joining: payload.joining,
    // address: payload.address,
    // phone: payload.phone,
  };
  // console.log(createMemeber);


  connection.query(query, data, (err, result) => {
    if(err){
      console.error("insert failed:",err.sqlMessage);
      return callback(err, null );
    }
    console.log("insert success,ID:", result.insertId);
    callback(null,result);
  });
};
function getAllUsers(callback) {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err.Message);
      return callback(err, null);
    }

    callback(null, results);
  });
}
// getAllUsers((err, usersData) => {
//   if (!err) {
//     console.log( usersData);
//   }
// });
const getUserByid = (id, callback) => {
  const query = "SELECT * FROM users WHERE id =?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching users by ID:", err.Message);
      return callback(err, null);
    }
    callback(null, results[0]);
  }); 
};
module.exports = { getAllUsers, getUserByid, createMemeber,  };

// let gau = getAllUsers;

// module.exports = { createMemeber };