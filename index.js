const express = require("express");
const users = require("./data.json");
const app = express();
const port = 5000;

// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });
app.get("/users", (req, res) => {
  const html = ` 
    <ul>
    ${users
      .map((user) => `<li>${user.first_name}  </li><li> ${user.email}</li>`)
      .join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    res.json({
      message: "User updated successfully",
    });
  })
  .delete((req, res) => {
    res.json({
      message: "User deleted successfully",
    });
  })
  .patch((req, res) => {
    res.json({
      message: "User patched successfully",
    });
  })
  .post((req, res) => {
    res.json({
      message: "User created successfully",
    });
  });

app.listen(port, () => console.log(`Server is running on port: ${port}`));
