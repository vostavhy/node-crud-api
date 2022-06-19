import users from '../data/users.json' assert { type: 'json' };

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

export { findAll };
