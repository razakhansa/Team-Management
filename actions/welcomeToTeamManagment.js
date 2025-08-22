const welcomeToTeamManagement = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head></head>
      <body><h1>Welcome to Team Management</h1></body>
      <button><a href="/members">table</button>
      <button><a href="/members/create">form</button>
    </html>
  `);
  return res.end();
};

exports.welcomeToTeamManagement = welcomeToTeamManagement;