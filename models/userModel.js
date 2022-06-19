import users from '../data/users.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';
import { writeDataToFile } from '../utils.js';

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

const findByID = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    resolve(user);
  });
};

const create = (user) => {
  return new Promise((resolve, reject) => {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile(users);
    resolve(newUser);
  });
};

export { findAll, findByID, create };
