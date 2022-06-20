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

const update = (user) => {
  return new Promise((resolve, reject) => {
    const newUsers = users.filter((u) => u.id !== user.id);
    const newUser = { id: uuidv4(), ...user };
    newUsers.push(user);
    writeDataToFile(newUsers);
    resolve(user);
  });
};

const del = (user) => {
  return new Promise((resolve, reject) => {
    const newUsers = users.filter((u) => u.id !== user.id);
    writeDataToFile(newUsers);
    resolve(user);
  });
};

export { findAll, findByID, create, update, del };
