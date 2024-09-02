
      
## question no: 17

## question : How do you listen for an event in Node.js?

## answer: You can listen for an event using the `.on()` method of an EventEmitter instance: `const EventEmitter = require('events'); const emitter = new EventEmitter(); emitter.on('event', () => { console.log('Event fired!'); });`
      