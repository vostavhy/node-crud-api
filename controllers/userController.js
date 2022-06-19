import { findAll } from '../models/userModel.js';

const getUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

export { getUsers };
