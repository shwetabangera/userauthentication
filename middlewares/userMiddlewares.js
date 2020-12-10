const fs = require("fs");
const path = require("path");
const User = require("../models/userModels");
const fileName = path.join(__dirname, "--", "data", "users.json");
const users = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const checkRequestBody = (req, res, next) => {
  let validationArray;
  switch(req.url){
    case "/users/signup":
      validationArray=["email","password","confirmPassword"];
      break;
      case "/users/login":
      validationArray=["email","password"];
      break;
  }

  let result = validationArray.every((key) => {
    return req.body[key] && req.body[key].trim().length;
  });
  if (!result) {
   // return res.send("Invalid body");
    return sendErrorMessage(
      new AppError(400, "Unsuccessful", "Invalid Request Body"),req,res,
    );
  }
  next();
};
const isEmailValid = (req, res, next) => {
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)==req.body.email;
}

  next();
};
const checkConfirmPassword = (req, res, next) => {
  if (!req.body.password == req.body.confirmPassword) {
    return res.sendErrorMessage("Confirm password and password dont match");
  }
  next();
};
const isEmailUnique=(req,res,next)=>{
    let findUser=users.find((user)=>{
     return user.email==req.body.email;
    });
    next();
};
const createPasswordHash = async (req, res, next) => {
  let salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  next();
};
const isUserRegistered=(req,res,next)=>{
let findUser=users.find((user)=>{
     return user.email==req.body.email;
    });
    if(!findUser){
        return sendErrorMessage(new AppError(422,"Unsuccessful","User not registered"),
        req,res,);
    }
    req.currentUser={..findUser};
    next();
};

module.exports.checkRequestBody = checkRequestBody;
module.exports.isEmailVaild = isEmailValid;
module.exports.checkConfirmPassword = checkConfirmPassword;
module.exports.isEmailUnique = isEmailUnique;
module.exports.createPasswordHash = createPasswordHash;
module.exports.isUserRegistered=isUserRegistered;