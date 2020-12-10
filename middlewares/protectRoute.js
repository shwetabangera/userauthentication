const { verifyToken } = require("../helpers/jwtAuthentication");
const protectRoute = async (req, res, next) => {
  let jwtToken = req.headers.authorization.split(" ")[1];
  console.log("Jwt token extractor", jwtToken);
  next();
};
module.exports = protectRoute;
