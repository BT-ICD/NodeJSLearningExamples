/**
 * Example of setTimeout - 
 * Argument : Function, Duration in miliseconds, Additional Argument to the callback function
 *  
 */
const rocks = who=>{
    console.log(who + ' rocks');
}
setTimeout(rocks,4000,'Pluralsight');
let n = 64;
function printLetter(){
    n++;
    let char = String.fromCharCode(n);
    console.log(char);
    if(n==90){
        clearInterval(timerId);
    }
}
let timerId = setInterval(printLetter,1000);
