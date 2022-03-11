const http = require('http');

/** 
 * Listener function for create server method
 * It contains two arguments
 * 1 - request object
 * 2 - response object
 * 
 * so requestListener is a function, that invokes every we request
*/
const requestListener = (req,res)=>{
    //to get details of request object
    //request is an object of http.IncomingMessage. This class is used to instantiate a request (req) object
    //res is the object of type ServerResponse
    //Both the reqest and response objects are streams. request object is a readable stream while the response object is a writable stream.
    //Because streams are eventemitter we can subscribe to events emitted by these objects too.
    //console.log(req);
    console.dir(req,{depth:0}); //Do not print any nested objects, only print the first level of properties for this req object
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers.host);
    res.end('Hello World\n');
};

/**
 * Option - 1 - to create server
 * Method createServer - argument function - requestListener passed as a function reference
 * returns an object of http.server
 *  
 */
//const server = http.createServer(requestListener);
/**
 * Option - 2 - to create server
 * Instead of passing requestListener to the createServer method argument, we can listen request event by subscribing request event emitter
 * So every time when our server receives a request, it will execute request event and our requestListener function will call
 */
const server = http.createServer();
server.on('request',requestListener);

server.listen(4242,()=>{
    console.log('Server is listening');
})

/**
 * The http.IncomingMessage Object
 * Either the HTTP server or the HTTP client creates the IncomingMessage object. On the server side the client request is represented by an IncomingMessage object, and on the client side the server response is represented by an IncomingMessage object. The reason that the IncomingMessage object can be used for both is that the functionality is basically the same.
 * The IncomingMessage object implements a Readable stream, allowing you to read the client request or server response as a streaming source. This means that the readable and data events can be listened on and used to read data from the stream.
 * 
 * An IncomingMessage object is created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response' event respectively. 
 * It may be used to access response status, headers and data.
 * Reference:
 * https://www.oreilly.com/library/view/nodejs-mongodb-and/9780133844351/ch07lev2sec5.html
 * https://nodejs.org/api/http.html
 */