const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if(req.url === "/main/process"){
    res.end('mi proceso\n');
  }  
  res.statusCode = 200;

  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
