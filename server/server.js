const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");

const userRouter = require("./routes/user");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 9696;

server.use(cors());
server.use(express.json());
server.use(cookieparser());
server.use(morgan("dev"));

const ConnectionToDB = (async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB!");
  } catch (error) {
    console.error(error);
  }
})();

server.use("/", userRouter);

server.get("/", (req, res) => {
  res.send("Password Manager");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
