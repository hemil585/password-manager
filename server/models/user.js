const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;
const { isEmail } = require("validator");

const UserSchema = Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "firstname must be 2 characters long"],
    },
    lastname: {
      type: String,
      required: false,
      minlength: [2, "lastname must be 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
      minlength: [6, "minimum password length is 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
      return user
    }
    throw new Error('incorrect password')
  }
  throw new Error('incorrect email')
};

const User = model("User", UserSchema);
module.exports = User;
