/**
 * Exist node process after 2 seconds
 * About exit listener 
 * Learning Reference: https://nodejs.org/api/process.html#event-exit
 */
setTimeout(()=>process.exit(),5000);

//register callback when node process exit
process.on('exit',()=>{
    let envData = process.env;
    
    console.log(envData);
    console.log('Process will exit now....')
});

console.log('Hello ');