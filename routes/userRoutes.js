const express = require("express");
const {
  checkRequestBody,
  isEmailValid,
  isEmailUnique,
  checkConfirmPassword,
  createPasswordHash,
  isUserRegistered,
} = require("../middlewares/userMiddlewares");
const { signUpUser, loginUser } = require("../controllers");
const router = express.Router();
router
  .route("/signup")
  .post(
    checkRequestBody,
    isEmailValid,
    isEmailUnique,
    checkConfirmPassword,
    createPasswordHash,
    signUpUser
  );
router.route("/login").post(checkRequestBody, isUserResgistered, loginUser);
router.route("/logout").get();
module.exports = router;
