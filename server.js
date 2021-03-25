import express from 'express';
import path from 'path';
import cors from 'cors';

const server = express();
const port = 3000;
const __dirname = path.resolve();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '/dist')));

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default server;
