const jwt = require("jsonwebtoken");
const User = require("../models/user");

const handleError = (err) => {
  const errors = { firstname: "", lastname: "", email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "that email is already taken";
  }

  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "that password is incorrect";
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: maxAge,
  });
};

exports.signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await User.create({ firstname, lastname, email, password });
    const jwt = createToken(user._id);
    res.cookie("jwtToken", jwt, { maxAge: maxAge * 1000, httpOnly: true });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json(errors);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const jwt = createToken(user._id);
    res.cookie("jwtToken", jwt, { maxAge: maxAge * 1000, httpOnly: true });
    res.status(200).json(user);
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json(errors);
  }
};
