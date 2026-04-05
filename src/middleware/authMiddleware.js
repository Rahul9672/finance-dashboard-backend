const store = require('../store/store');

module.exports = (req, res, next) => {
  const userId = req.headers['user-id'];

  if (!userId) {
    return res.status(401).json({ msg: 'User ID missing' });
  }

  const user = store.users.find(u => u.id === userId);

  if (!user) {
    return res.status(401).json({ msg: 'Invalid user' });
  }

  req.user = user;
  next();
};