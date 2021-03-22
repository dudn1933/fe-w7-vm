import express from 'express';
import path from 'path';
import cors from 'cors';

const server = express();
const port = 3000;
const __dirname = path.resolve();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'dist')));

// // 위와 같이 express와 app을 변수로 사용한다.
// server.get('/', (req, res) => {
//   const index = path.join(__dirname, 'dist', 'index.html');
//   res.sendFile(index);
// });

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

export default server;
