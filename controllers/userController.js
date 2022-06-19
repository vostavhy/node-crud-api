import { findAll, findByID, create } from '../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';
import { validate } from 'uuid';
import { getPostData } from '../utils.js';

// @desc Gets All Users
// route GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

// @desc Gets Single User
// route GET /api/user/:userID
const getUser = async (req, res, id) => {
  try {
    const user = await findByID(id);
    if (!user) {
      if (!validate(id)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `id ${id} is invalid` }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({ message: `user with id ${id} doesn't exist` })
        );
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc Create New User
// route POST /api/users
const createUser = async (req, res) => {
  try {
    let body = await getPostData(req);
    const { username, age, hobbies } = JSON.parse(body);

    if (!username || !age || !hobbies) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'One or several required fields are empty',
        })
      );
    } else if (
      typeof username !== 'string' ||
      typeof age !== 'number' ||
      typeof hobbies !== 'string'
    ) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Wrong types of fields' }));
    } else {
      const user = {
        username,
        age,
        hobbies,
      };
      const newUser = await create(user);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `${error}` }));
  }
};

export { getUsers, getUser, createUser };
