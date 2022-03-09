const EventEmitter = require('events');
/**
 * To create Event emitter object
 */
const myEmitter = new EventEmitter('TEST_EVENT');


/**
 * To listen TEST_EVENT - register event
 */
myEmitter.on('TEST_EVENT',()=>{
    console.log('Test_Event was fired');
});

//To invoke event
myEmitter.emit('TEST_EVENT');
myEmitter.emit('TEST_EVENT');