const { v4: uuid } = require('uuid');
const store = require('../store/store');

exports.createUser = (data) => {
  const user = {
    id: uuid(),
    name: data.name,
    role: data.role,
    active: true
  };

  store.users.push(user);
  return user;
};

exports.getUsers = () => store.users;