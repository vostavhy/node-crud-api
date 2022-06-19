import users from '../data/users.json' assert { type: 'json' };

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

const findByID = () => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    resolve(user);
  });
};

export { findAll, findByID };
