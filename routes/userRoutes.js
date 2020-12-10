const express = require("express");
const { checkRequestBody } = require("../middlewares/userMiddlewares");
//const { signUpUser, loginUser } = require("../controllers");
const router = express.Router();
router.route("/signup").post(checkRequestBody, signUpUser);
router.route("/login").post(loginUser);
router.route("/logout").get();
module.exports = router;
