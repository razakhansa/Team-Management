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
  } else if ((req.url === "/members/create" || isMemberCreateWithQuery) && req.method === "GET") {
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
      createMemeber(dataObj, (err, result)=> console.log(err, result));
    });

    return res.end();
  }else if (isDeleteMember) {
      const id = req.url.split("?")?.[1]?.split("=")?.[1];
     deleteUser(id ,(err, response) =>  console.log("delete response",err,response))
    return res.end();
    
  }else{

  }
};

exports.requestHandler = requestHandler;
