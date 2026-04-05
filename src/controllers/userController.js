const userService = require('../services/userService');
const { validateUser } = require('../utils/validator');

exports.createUser = (req, res) => {
  const error = validateUser(req.body);
  if (error) return res.status(400).json({ msg: error });

  const user = userService.createUser(req.body);
  res.status(201).json(user);
};

exports.getUsers = (req, res) => {
  res.json(userService.getUsers());
};