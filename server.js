import http from 'http';
import dotenv from 'dotenv';
import { getUsers } from './controllers/userController.js';

dotenv.config();

const server = http.createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    getUsers(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('Page not found');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
