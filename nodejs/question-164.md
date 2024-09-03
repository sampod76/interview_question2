
      
## question no: 164

## question : How do you resolve a domain name to an IP address in Node.js?

## answer: You can resolve a domain name to an IP address using `dns.lookup()`: `const dns = require('dns'); dns.lookup('example.com', (err, address) => { console.log(address); });`
      