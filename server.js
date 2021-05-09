const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
  console.log('request made');
});

server.listen(port, 'localhost', () =>{
  console.log(`listening for requests on port ${port}`)
})
