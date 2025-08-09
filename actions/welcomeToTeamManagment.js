export const welcomeToTeamManagement = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head></head>
      <body><h1>Welcome to Team Management</h1></body> 
    </html>
  `);
  return res.end();
};
