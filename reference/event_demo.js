const EventEmitter = require('events')

// ! Create class
class MyEmiter extends EventEmitter{

}

// ! init object
const myEmitter = new MyEmiter();

// !EventListener
myEmitter.on('event', ()=>{
    console.log('Event Fired')

}) 
// ! emit event
myEmitter.emit('event')