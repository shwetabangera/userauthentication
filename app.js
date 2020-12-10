const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const router = require("./routes/userRoutes");
dotenv.config({ path: "./config.emv" });
const app = express();
app.use("/users", router);
app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
