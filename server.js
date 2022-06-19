import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.PORT);

const server = http.createServer((req, res) => {});
const PORT = process.env.PORT || 5000;
