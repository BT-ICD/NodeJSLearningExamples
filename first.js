/**
 * First Node Example - Simple Web Server
 * To run - Open Terminal and execute following command:
 * node .\first.js
 * Open Browser and submit url: localhost:4242, to get response from web server
 */
const http = require('http');
const server = http.createServer((req,res) =>{
    res.end('Hello World\n');
});

server.listen(4242,()=>{
    console.log('Server is running');
});