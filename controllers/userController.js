const fs = require("fs");
const path = require("path");
const bcrypt=require("bcryptjs");
const AppError=require("../helpers/appError");
const sendErrorMessage=require("../helpers/sendErrorMessage");
const User = require("../models/userModels");
const fileName = path.join(__dirname, "--", "data", "users.json");
const users = JSON.parse(fs.readFileSync(fileName, "utf-8"));
const {generateToken}=require("../helpers/jwtAuthentication");
const { Console } = require("console");
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
    let result=await bcrypt.compare(req.body.password,req.currentUser.password,);
    if(!result){
      return sendErrorMessage(new AppError(401,"Unsuccessful","Password is incorrect"),req,res,);
    }
    res.send("User logged in successfully");
}
let jwtToken=await.generateToken({email:req.currentUser.email},process.env.JWT_SECRET,{expiresIn:"1d"});
console.log("Generated Token",jwtToken);
res.cookie("authentication",Date.now());
res.cookie("jwt",something generated using jsonwebtoken");
res.status(200).json({
  status:"Successful login",
  data:[{
    jwt:jwtToken,
  },
]
});
res.send("User logged in successfully");
catch(err){
  console.log(err);
  return sendErrorMessage(new AppError(500,"Unsuccessful","Internal Error"),req,res,);
}
};


module.exports.signUpUser = signUpUser;
module.exports.loginUser = loginUser;
