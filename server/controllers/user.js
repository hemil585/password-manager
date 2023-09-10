const jwt = require("jsonwebtoken");
const User = require("../models/user");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: maxAge,
  });
};

exports.signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const user = await User.create({ firstname, lastname, email, password });
    const jwt = createToken(user._id);
    res.cookie("jwtToken", jwt, { maxAge: maxAge * 1000, httpOnly: true });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};