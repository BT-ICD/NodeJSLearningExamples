const fs = require('fs');
const fileName = '1-use.js';

// Use of Immediately-invoked Function Expression 
(function readFileContent(){
    const data = fs.readFileSync(fileName,'UTF-8');
    console.log(data);
})()
// const data = fs.readFileSync(fileName,'UTF-8');
//     console.log(data);