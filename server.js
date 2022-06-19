import http from 'http';
import dotenv from 'dotenv';
import { getUsers, getUser } from './controllers/userController.js';

dotenv.config();

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    getUsers(req, res);
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    getUser(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('Page not found');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
