const { welcomeToTeamManagement } = require("./actions/welcomeToTeamManagment");
const { renderList } = require("./actions/renderlist");
const { createMemberForm } = require("./actions/createMember");
const { createMemeber } = require("./db");
const { submitForm } = require("./actions/save");

const requestHandler = async (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    welcomeToTeamManagement(req, res);
  } else if (req.url === "/members") {
    renderList(req, res);
  } else if (req.url === "/members/create" && req.method === "GET") {
    createMemberForm(req, res);
 } else if (req.url === "/members/create" && req.method === "POST"){
  
     
 
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
      // Here you would typically parse the request body to get the member details
      createMemeber(dataObj, res);
    });

    return res.end();
  }else if (req.url === "/members/create/submit" && req.method === "POST") {
     submitForm(req, res)
  }
};

exports.requestHandler = requestHandler;
