const submitForm = (req, res) =>{
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
          <head>
            <title>project</title>
          </head>
          <body>
            <h1>YOUR DATA IS Submit</h1>
            <a href="/member">Go to save data</a>
          </body>
        </html>
  `)
  return res.end()
}
exports.submitForm = submitForm;