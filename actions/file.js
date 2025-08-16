 const submitForm = (req, res, formData) => {
  console.log("Form Data:", formData);

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Project</title>
      </head>
      <body>
        <h1>Form Submitted Successfully!</h1>
        <a href="/members">Go to save data</a>
      </body>
    </html>
  `);
  return res.end();
};

module.exports = { submitForm };