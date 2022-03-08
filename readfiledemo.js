const fs = require('fs');
const fileName = '1-use.js';

// Use of Immediately-invoked Function Expression 
// (function readFileContent(){
//     const data = fs.readFileSync(fileName,'UTF-8');
//     console.log(data);
// })()
// const data = fs.readFileSync(fileName,'UTF-8');
//     console.log(data);

const data = fs.readFileSync(__filename, 'utf-8');
let fileName1 = __filename;
console.log(`Filename 1 is ${fileName1} \n`);
console.log('Content of this file \n',data);