import server from './app';

require('dotenv').config();

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`hello world, this port is ${PORT}`);
});
