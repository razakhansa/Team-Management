const submitForm = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
          <head>
            <title>project</title>
          </head>
          <body>
            <h1>YOUR DATA IS Submit</h1>
<<<<<<< HEAD
            <a href="/actions/renderlist.js">Go to save data</a>
=======
            <a href="/renderlist">Go to save data</a>
>>>>>>> 1222fd24349d10843e5e21a27e289fbc4b693de0
          </body>
        </html>
  `);
  return res.end();
};
module.exports = { submitForm };
