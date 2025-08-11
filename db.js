const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jsproject",
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
    console.log(usersData);
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
//   connection.query("SELECT * FROM user
// app.get("/api/users", (req, res) => {s", (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// });
// app.put("/api/users", (req, res) => {
//   const { name, email } = req.body;
//   if (!email || !name)
//     return res.status(400).json({ error: "Email and name required" });

//   const query = "UPDATE users SET name = ? WHERE email = ?";
//   connection.query(query, [name, email], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: "User updated", affected: result.affectedRows });
//   });
// });

// app.delete("/api/users", (req, res) => {
//   const { email } = req.body;
//   if (!email) return res.status(400).json({ error: "Email required" });

//   const query = "DELETE FROM users WHERE email = ?";
//   connection.query(query, [email], (err, result) => {
//     if (err) return res.status().json({ error: err.message });
//     res.json({ message: "User deleted", affected: result.affectedRows });
//   });
// });
