
      
## question no: 66

## question : How do you resolve a domain name in Node.js?

## answer: You can resolve a domain name using the `dns.lookup()` method: `const dns = require('dns'); dns.lookup('example.com', (err, address, family) => { console.log('address:', address); });`
      