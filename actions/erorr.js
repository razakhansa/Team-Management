 const eroorForm = ( res) => {
 

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Project</title>
      </head>
      <body>
        <h1>Some Think Went Worng!</h1>
        <a href="/members/create">Go to form</a>
      </body>
    </html>
  `);
  return res.end();
};

module.exports = { eroorForm };