
      
## question no: 1194

## question : How do you create a custom event in Node.js?

## answer: You can create a custom event using the `EventEmitter` class: `const EventEmitter = require('events'); const emitter = new EventEmitter(); emitter.on('customEvent', () => { console.log('Custom event triggered'); }); emitter.emit('customEvent');`
      