
      
## question no: 86

## question : How do you format a URL in Node.js?

## answer: You can format a URL in Node.js using the `url.format()` method: `const url = require('url'); const formattedUrl = url.format({ protocol: 'https', host: 'example.com', pathname: '/path', query: { name: 'John' } });`
      