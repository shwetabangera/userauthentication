const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const AppError
const User = require("../models/userModels");
const fileName = path.join(__dirname, "--", "data", "users.json");
const users = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const signUpUser = (req, res, next) => {
  //create user
  let newUser = new User(req.body.email, req.body.password);
  console.log("new user", newUser);
  users.push(newUser);
  fs.writeFile(fileName, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      res.send("Internal error");
      return err;
    }
    res.send("New user created");
  });
};
const loginUser = (req, res, next) => {
  //login and password
  console.log("Current User", req.CurrentUser);
try{
    let result=await bcrypt.compare(req.body.password,req.);
    return 
}catch(err){

}
 
  res.send("User logged in successfully");
};
module.exports.signUpUser = signUpUser;
module.exports.loginUser = loginUser;
