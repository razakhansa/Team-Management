const createMember = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write(`
    <html>
      <head><title>Form page</title></head>
      <body>
        <h2>ENTER YOUR PERSONAL DETAIL</h2>
        <form action="/file" method="POST">
          <label for="first">First Name</label><br>
          <input type="text" name="name" placeholder="Enter your name"><br><br>

          <label for="email">Email</label><br>
          <input type="email" name="email" placeholder=".com"><br><br>

          <label for="cnic">CNIC Number</label><br>
          <input type="text" name="cnic" placeholder="Enter your cnic"><br><br>

          <label for="designation">Your Designation</label><br>
          <input type="text" name="designation" placeholder="Enter your Designation"><br><br>

          <label for="joining">Date of Joining</label><br>
          <input type="text" name="joining" placeholder="Enter your Joining"><br><br>

          <label for="address">Enter your address</label><br>
          <input type="text" name="address" placeholder="Enter your address"><br><br>

          <label for="phone">Enter your phone number</label><br>
          <input type="text" name="phone" placeholder="Enter your phone number"><br><br>

          <label for="male">Male</label>
          <input type="radio" id="male" name="gender" value="male">
          <label for="female">Female</label>
          <input type="radio" id="female" name="gender" value="female"><br><br>

          <input type="submit" value="submit">
        </form> 
      </body>
    </html>
  `);
  return res.end();
};

exports.createMemberForm = createMember;
