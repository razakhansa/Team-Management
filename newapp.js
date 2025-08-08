import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jsproject",
});
async function insertUsers() {
  const value = [
    ["sara", "sara@1245343"],
    ["ali", "ali@3432"],
    ["john", "john@1233"],
    ["doe", "doe@12334"],
    ["jane", "jane@12343"],
    ["mike", "mike@124323"],
    ["lisa", "lisa@12223"],
    ["tom", "tom@1232"],
    ["lucy", "lucy@123"],
  ];
}
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log(" Connected to the database successfully!");
});

app.post("/api/users", (req, res) => {
  const users = req.body.users;
  if (!users || !Array.isArray(users)) {
    return res.status(400).json({ error: "Invalid users data" });
  }

  const values = users.map((u) => [u.name, u.email]);
  const query = "INSERT   IGNORE     INTO users (name, email) VALUES ?";

  connection.query(query, [values], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({ message: "Users added", inserted: result.affectedRows });
  });
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.put("/api/users", (req, res) => {
  const { name, email } = req.body;
  if (!email || !name)
    return res.status(400).json({ error: "Email and name required" });

  const query = "UPDATE users SET name = ? WHERE email = ?";
  connection.query(query, [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated", affected: result.affectedRows });
  });
});

app.delete("/api/users", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const query = "DELETE FROM users WHERE email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted", affected: result.affectedRows });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
