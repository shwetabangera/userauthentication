const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const router = require("./routes/userRoutes");
const protectRoute = require("./middlewares/protectRoute");
dotenv.config({ path: "./config.env" });
const app = express();
//app.use("/users", router);
app.use(express.static(path.join(__dirname, "public")));
app.use("/dashboard", (req, res) => {
  console.log("Headers", req.headers);
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});
app.use("/users", router);
app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
