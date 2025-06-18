const http = require('http');
const url = require('url');

function handler(req, res) {
   console.log(req.url);
   res.writeHead(200, {'Content-type':'text/plain'});
   res.write('Hello, I am a webserver !');
   res.end();
}

const server = http.createServer(handler);

const PORT = process.env.PORT || 3000;
server.listen(PORT);
