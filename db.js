const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "team_management",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log(" Connected to the database successfully!");
});

const createMember = (payload, callback) => {
  const query = "INSERT INTO users SET ?";
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
    if (err) {
      console.error(" Error inserting member:", err);
      return callback(err, null);
    }
    // callback(null, result.insertId);
  });
};
const getAllUsers = (callback) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(" Error fetching users:", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};
//
getAllUsers((err, usersData) => {
  if (!err) {
    console.log(usersData);
  }
});
const getUserByid = (id, callback) => {
  const query = "SELECT * FROM users WHERE id =?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching users by ID:", err);
      return callback(err, null);
    }
    callback(null, results[0]);
  });
};
const updateMember = (id, data, callback) => {
  const query = `
    UPDATE users 
    SET name=?, email=?, cnic=?, designation=?, joining=?, address=?, phone=? 
    WHERE id=?
  `;
  const values = [
    data.name,
    data.email,
    data.cnic,
    data.designation,
    data.joining,
    data.address,
    data.phone,
    id,
  ];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return callback(err, null);
    }
    callback(null, result.affectedRows > 0);
  });
};
const deleteMember = (id, callback) => {
  const query = "DELETE FROM users WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return callback(err, null);
    }
    callback(null, result.affectedRows > 0);
  });
};

module.exports = {
  createMember,
  getAllUsers,
  getUserByid,
  updateMember,
  deleteMember,
};

// module.exports = { getUserByid, createMember };

// let gau = getAllUsers;

// exports.createMember = createMember;
