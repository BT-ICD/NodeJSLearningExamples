/**
 * Example to serve static file  
 * __dirname is the current directory name of the current file
 *Reference: 
 API Design in Node.js Featuring Express & Mongo - By Scott Moss
 */
var express = require('express');
var app = express();

app.listen(4242,()=>{
    console.log('Web Server is running');
});

app.get('/',function(req,res){
    //first argument file which we have to send
    //second argument - error handling - in case of any error
    res.sendFile(__dirname+'/public/index.html', function (err){
        //To raise error
        if(err){
            res.status(500).send(err);
        }
    });
});

