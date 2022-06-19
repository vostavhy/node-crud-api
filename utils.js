import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import path from 'path';

const writeDataToFile = async (content) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileDestination = path.join(__dirname, 'data', 'users.json');
  try {
    writeFile(fileDestination, JSON.stringify(content));
  } catch (error) {
    console.log('Writing ERROR:', error);
  }
};

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export { writeDataToFile, getPostData };
