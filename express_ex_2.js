/**
 * 
 * Reference: https://stackabuse.com/get-http-post-body-in-express-js/
 * https://www.codegrepper.com/code-examples/javascript/nodejs+express+js+receive+json+post
 */
var todos=[];
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/** app.use(express.json()) - allows to read content of request body with json format. Without this req.body in post call contains undefined */
//app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true })); 

/**
 * Another approach,  app.use(bodyParser.json()); - allows to read content of request body with json format. Without this req.body in post call contains undefined 
 */
app.use(bodyParser.json());
//app.use(bodyParser.raw());

app.listen('4242',()=>{
    console.log('Web server is running on port 4242');
});
app.get('/todos', function(req,res){
    res.json(todos);
});
app.post('/todos',function(req,res){
    var todo = req.body
    console.log(req.body);
    todos.push(todo);
    res.send(todo);
});

