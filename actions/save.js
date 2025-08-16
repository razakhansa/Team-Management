const submitForm = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
          <head>
            <title>project</title>
          </head>
          <body>
            <h1>YOUR DATA IS Submit</h1>
            <a href="/renderlist">Go to save data</a>
          </body>
        </html>
  `);
  return res.end();
};
module.exports = { submitForm };
