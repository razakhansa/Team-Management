import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;
app.use(express.json());
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  //   password: "taha@123",
  database: "jsproject",
});

console.log(" Connected to the database successfully!");
app.post("/api/users"),
  async (req, res) => {
    res.send("User posted");
    const users = req.body.users; // Array of {name, email}

    const values = users.map((user) => [user.name, user.email]);
  };
async function insertUsers() {
  const value = [
    ["taha", "taha@9212"],
    ["sara", "sara@12343"],
    ["ali", "ali@3432"],
    ["john", "john@1233"],
    ["doe", "doe@12334"],
    ["jane", "jane@12343"],
    ["mike", "mike@124323"],
    ["lisa", "lisa@12223"],
    ["tom", "tom@1232"],
    ["lucy", "lucy@123"],
  ];
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES ?",
      [value]
    );

    console.log(` Inserted ${result.affectedRows} users`);
  } catch (err) {
    console.error(" Insert error:", err.message);
  }
}
async function getAllUsers() {
  app.get("/api/users"),
    async (req, res) => {
      try {
        const [rows] = await db.execute("SELECT * FROM users");
        console.log(" All Users:", rows);
      } catch (err) {
        console.error(" Fetch error:", err.message);
      }
    };
}
// update operation
// update table_name
// set column1 = value1, column2 = value2, ...
// whwre condition;
async function updateUser(email, newName) {
  app.put("/api/users"),
    async (req, res) => {
      const { email, name } = req.body;
      try {
        const [rows] = await db.execute(
          "UPDATE users SET name = 'M.Taha khan' WHERE email = 'taha@921' "
        );
        console.log("all users:", rows);
      } catch (error) {
        console.error(error);
      }
    };
}
async function deleteUser(email) {
  app.delete("/api/users"),
    async (req, res) => {
      const { email } = req.body;
      try {
        const [rows] = await db.execute("DELETE FROM  users where email = ?", [
          "sara@123",
        ]);
        console.log("all users:", rows);
      } catch (error) {
        console.error(error);
      }
    };
}

// await insertUsers();
// await getAllUsers();
// await updateUser("taha@9212", "M. Taha Khan");
// await deleteUser("sara@12343");
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
