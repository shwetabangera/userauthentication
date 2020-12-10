const bcrypt = require("bcryptjs");
const { nextTick } = require("process");
const util = require("util");
const generateSalt = util.promisify(bcrypt.genSalt);
const hashPassword = util.promisify(bcrypt.hash);
const comparePassword = util.promisify(bcrypt.compare);
//middleware
const createHashValue = async () => {
  let newUser;
  let salt = await generateSalt(10);
  let hashValue = await hashPassword("plain text", salt);
  newUser.password = hash;
};
generateSalt(10).then((salt) => {
  console.log("Salt from promise", salt);
  return hashPassword("plain text", salt);
});
/* const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("password", salt);

console.log(hash); */
/* bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    console.log(err);
    return Array;
  }
  console.log(salt);
  bcrypt.hash("password", salt, (err, hash) => {
    if (err) {
      console.log("Error in hash", err);
      return err;
    }
    console.log("Hashed value", hash);
    bcrypt.compare("password", hash, (err, result) => {
      if (err) {
        return err;
      }
      console.log("Comparison result", result);
    });
  });
});
 */
