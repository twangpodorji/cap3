// building a server using express
// lets build a server with the http module 
const http = require('http');
const server = http.createServer((req,res ) => { // create a server 
     // handle the request and send a response   
     res.statuscode = 200;
})

// defining the port 
const port = 3030;

// listen to the port
server.listen(port, () => { // The server is listening on port 3000 
     console.log ('This Server is listening on port 3000')
}); 

