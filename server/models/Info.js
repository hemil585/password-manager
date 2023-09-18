const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const InfoSchema = Schema(
  {
    sitename: String,
    password: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Info = model("Info", InfoSchema);
module.exports = Info;
