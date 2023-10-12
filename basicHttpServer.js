const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end(`<h3>Hello from url /</h3>`);
    }
    else if(req.url == '/about'){
        res.end('Hi I am about');
    }
    else {
        res.end(`404 not found error ${req.url}`);
    }
})

server.listen(5005);