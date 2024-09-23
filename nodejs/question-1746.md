
      
## question no: 1745

## question : How do you listen for events in Node.js?

## answer: You can listen for events in Node.js using the `.on()` method of an EventEmitter instance: `const EventEmitter = require('events'); const emitter = new EventEmitter(); emitter.on('event', () => { console.log('Event triggered'); });`
      