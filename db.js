
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307,
  database: "team_management", 
});


connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log(" Connected to the database successfully!");
});

const createMemeber = async (payload, res) => {
  console.log("Creating member");
  console.log(payload);

  // if (!payload) {
  //   return res.status(400).json({ error: "Invalid users data" });
  // }

  let query = "INSERT INTO users SET ?";
  const data = {
    name: payload.name,
    email: payload.email,
    cnic: payload.cnic,
    designation: payload.designation,
    joining: payload.joining,
    address: payload.address,
    phone: payload.phone,
  };

  connection.query(query, data, (err, result) => {
    console.log(err, result);
  });
};
function getAllUsers(callback) {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
}
getAllUsers((err, usersData) => {
  if (!err) {
    console.log( usersData);
  }
});
const getUserByid = (id, res) => {
  const query = "SELECT * FROM users WHERE id =?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
    }
  });
};
module.exports = { getUserByid };


let gau = getAllUsers;

exports.createMemeber = createMemeber;
