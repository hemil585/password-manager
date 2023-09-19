const Info = require("../models/Info");

exports.addInfo = async (req, res) => {
  try {
    const { sitename, password } = req.body;
    const { id } = req.params;
    const info = await Info.create({
      sitename: sitename,
      password: password,
      user: id,
    });
    res.status(201).json({ info, user: id });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

exports.getInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await Info.find({ user: id });
    res.status(200).json(info)
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};
