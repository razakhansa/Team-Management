const { welcomeToTeamManagement } = require("./actions/welcomeToTeamManagment");
const { renderList } = require("./actions/renderlist");
const { createMemberForm } = require("./actions/createMember");
const { createMemeber, deleteUser } = require("./db");
const { submitForm } = require("./actions/file");
const requestHandler = async (req, res) => {
  console.log(req.url, req.method);
  const isMemberCreateWithQuery = req.url.split("?")?.[0] === "/members/create";
  const isDeleteMember = req.url.split("?")?.[0] === "/members/delete";

  if (req.url === "/") {
    welcomeToTeamManagement(req, res);
  } else if (req.url === "/members") {
    renderList(req, res);
  } else if (
    (req.url === "/members/create" || isMemberCreateWithQuery) &&
    req.method === "GET"
  ) {
    createMemberForm(req, res);
  } else if (req.url === "/members/create" && req.method === "POST") {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      // console.log("Request body received");
      const body = Buffer.concat(chunks).toString();
      const parsedData = new URLSearchParams(body);
      const dataObj = {};
      for (var pair of parsedData.entries()) {
        dataObj[pair[0]] = pair[1];
      }

      if (!dataObj.name || !dataObj.email || !dataObj.cnic) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end(" Name, Email, and CNIC are required!");
      }
      createMemeber(dataObj, (err, result) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end(" Database Error: " + (err.sqlMessage || err));
        }
        res.writeHead(201, { "Content-Type": "text/plain" });
        res.end(" Member created successfully with ID: " + result.insertId);
      });
    });
  } else if (isDeleteMember) {
    const id = req.url.split("?")?.[1]?.split("=")?.[1];
    if (!id) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("member ID required for delete!");
    }
    deleteUser(id, (err, response) =>
      console.log("delete response", err, response)
    );
  } else {
  }
};

exports.requestHandler = requestHandler;
