/**
 * Exmaple to learn express.js web framework
 * The Express package exports its top-level API as a function.
 * So express variable now is a function
 */
const express = require('express');
const server = express();
server.listen(4242,()=>{
    console.log('server is listening');
});

/**
 * Express allows us to define many listeners. To define listener per URL. 
 * For every URL and HTTP operation that we want our server to support, we define a listener.
 * Example root url /
 * First Argument url
 * Second argument listener function that receives both the response object
 */
server.get('/',(req,res)=>{
    res.send('Hello  Express ');
});
server.get('/about',(req,res)=>{
    res.send('About us ');
});