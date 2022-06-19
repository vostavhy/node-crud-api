import http from 'http';
import dotenv from 'dotenv';
import users from './data/users.json' assert { type: 'json' };

dotenv.config();

const server = http.createServer((req, res) => {
  if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end('Page not found');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
